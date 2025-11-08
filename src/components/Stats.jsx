import React from 'react';
import CountUp from './ui/CountUp';
import CountUpToInfinity from './ui/CountUpToInfinity';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <h2 className="stats-heading">
          Our Goals, Our Ambition
        </h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">
              <CountUp
                from={0}
                to={10}
                duration={2}
                className="count-up-text"
              />
            </div>
            <div className="stat-label">M+</div>
            <div className="stat-description">Students</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <CountUp
                from={0}
                to={200}
                duration={2}
                className="count-up-text"
              />
            </div>
            <div className="stat-label">+</div>
            <div className="stat-description">Campuses under Jointt</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <CountUpToInfinity
                from={0}
                to={1000}
                duration={2}
                className="count-up-text"
              />
            </div>
            <div className="stat-description">Connections</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;


