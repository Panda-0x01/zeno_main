import React from 'react';
import { Github, BookOpen, Lock, Mic, Zap, Plug } from 'lucide-react';

const HeroSection = ({ onOpenDocs }) => {
  return (
    <div className="hero-section animate-slideInRight">
      <div className="hero-content">
        <div className="badge">
          <span>v1.0.0 • Local-First AI</span>
        </div>
        
        <h1 className="hero-title">Zeno</h1>
        
        <p className="hero-subtitle">
          Your Local AI Desktop Assistant
        </p>
        
        <p className="hero-description">
          A privacy-first, cross-platform AI assistant powered by Ollama. 
          Voice interaction, plugin system, and complete control over your data.
        </p>

        <div className="feature-pills">
          <span className="pill">
            <Lock size={16} />
            Private
          </span>
          <span className="pill">
            <Mic size={16} />
            Voice
          </span>
          <span className="pill">
            <Zap size={16} />
            Fast
          </span>
          <span className="pill">
            <Plug size={16} />
            Extensible
          </span>
        </div>

        <div className="button-group">
          <button
            className="btn btn-primary"
            onClick={() => window.open('https://github.com/Panda-0x01/zeno_AI.git', '_blank')}
          >
            <Github size={20} />
            View on GitHub
          </button>

          <button
            className="btn btn-secondary"
            onClick={onOpenDocs}
          >
            <BookOpen size={20} />
            Documentation
          </button>
        </div>

        <div className="tech-stack">
          <p className="tech-stack-label">Built with</p>
          <div className="tech-stack-items">
            <span className="tech-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="2" fill="#a0a0a0"/>
                <g stroke="#a0a0a0" strokeWidth="1.5" fill="none">
                  <ellipse cx="12" cy="12" rx="10" ry="4"/>
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
                </g>
              </svg>
              React + TypeScript
            </span>
            <span className="tech-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" fill="#707070"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#a0a0a0"/>
                <circle cx="12" cy="12" r="3" fill="#a0a0a0"/>
              </svg>
              Electron
            </span>
            <span className="tech-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#707070" stroke="#707070" strokeWidth="1"/>
                <path d="M2 17l10 5 10-5" stroke="#a0a0a0" strokeWidth="2" fill="none"/>
                <path d="M2 12l10 5 10-5" stroke="#a0a0a0" strokeWidth="2" fill="none"/>
              </svg>
              Python FastAPI
            </span>
            <span className="tech-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#333333" stroke="#a0a0a0" strokeWidth="1.5"/>
                <path d="M12 6v12M6 12h12" stroke="#a0a0a0" strokeWidth="2"/>
              </svg>
              Ollama
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          opacity: 0;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .badge {
          display: inline-block;
          width: fit-content;
        }

        .badge span {
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          background-color: var(--bg-secondary);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          border: 1px solid var(--border-color);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          font-weight: 300;
        }

        .hero-description {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          max-width: 600px;
        }

        .feature-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .pill {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .button-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }

        .tech-stack {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          margin-top: 1rem;
        }

        .tech-stack-label {
          color: var(--text-tertiary);
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .tech-stack-items {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .tech-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tech-item svg {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .button-group {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            justify-content: center;
            width: 100%;
          }

          .feature-pills {
            justify-content: center;
          }

          .tech-stack-items {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-description {
            font-size: 0.875rem;
          }

          .pill {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .tech-item {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;