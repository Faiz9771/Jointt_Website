import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function CountUpToInfinity({
  from = 0,
  to = 1000,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const [showInfinity, setShowInfinity] = useState(false);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = num => {
    const str = num.toString();

    if (str.includes('.')) {
      const decimals = str.split('.')[1];

      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    latest => {
      const hasDecimals = maxDecimals > 0;

      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current && !showInfinity) {
      ref.current.textContent = formatValue(from);
    }
  }, [from, formatValue, showInfinity]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(to);
      }, 0);

      // After counting finishes, show infinity symbol
      const infinityTimeoutId = setTimeout(() => {
        setShowInfinity(true);
        if (typeof onEnd === 'function') onEnd();
      }, duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(infinityTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, from, to, onStart, onEnd, duration]);

  useEffect(() => {
    if (showInfinity && ref.current) {
      ref.current.textContent = '∞';
    }
  }, [showInfinity]);

  useEffect(() => {
    if (!showInfinity) {
      const unsubscribe = springValue.on('change', latest => {
        if (ref.current && !showInfinity) {
          ref.current.textContent = formatValue(latest);
        }
      });

      return () => unsubscribe();
    }
  }, [springValue, formatValue, showInfinity]);

  return <span className={className} ref={ref} />;
}

