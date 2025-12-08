import React from 'react';
import DonutAnimation from './DonutAnimation';

const FeatureSection = () => {
  return (
    <div className="feature-section animate-slideInLeft">
      <div className="donut-wrapper animate-float">
        <DonutAnimation />
      </div>
      
      {/* <div className="feature-label">
        <span className="sparkle">✨</span>
        <span>Powered by Mathematical Beauty</span>
        <span className="sparkle">✨</span>
      </div> */}

      <style jsx>{`
        .feature-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          opacity: 0;
        }

        .donut-wrapper {
          position: relative;
        }

        .feature-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-family: 'Courier New', monospace;
        }

        .sparkle {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FeatureSection;