import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import DocumentationContent from './components/DocumentationContent';
import { X } from 'lucide-react';
import './styles/responsive.css';

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


    </div>
  );
}

export default App;