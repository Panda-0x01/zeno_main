import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import DocumentationContent from './components/DocumentationContent';
import { X } from 'lucide-react';

function App() {
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  return (
    <div className="app">
      <div className="container">
        <div className="grid">
          <FeatureSection />
          <HeroSection onOpenDocs={() => setIsDocsOpen(true)} />
        </div>
      </div>

      {isDocsOpen && (
        <div className="modal-overlay animate-fadeIn" onClick={() => setIsDocsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsDocsOpen(false)}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <h2 className="modal-title">Zeno Documentation</h2>
            </div>
            <div className="modal-body">
              <DocumentationContent />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .app {
          height: 100vh;
          overflow: hidden;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          height: 100vh;
          width: 100%;
        }

        .modal-body {
          max-height: calc(85vh - 8rem);
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;