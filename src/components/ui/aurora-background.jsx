import React from "react";
import "./aurora-background.css";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={`aurora-background ${className || ""}`}
      {...props}
    >
      <div className="aurora-container">
        <div className="aurora-gradient"></div>
        {showRadialGradient && (
          <div className="aurora-radial-gradient"></div>
        )}
        <div className="aurora-content">
          {children}
        </div>
      </div>
    </div>
  );
};







