import React from 'react';
import { Layers, Sparkles, Rocket, Lock, Keyboard, Package, FileText } from 'lucide-react';

const DocumentationContent = () => (
  <div style={{ color: '#a0a0a0', lineHeight: '1.6' }}>
    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Layers size={20} />
        Architecture
      </h3>
      <pre style={{ 
        backgroundColor: '#1a1a1a', 
        padding: '1rem', 
        borderRadius: '8px', 
        fontSize: '0.875rem',
        border: '1px solid #333333',
        overflowX: 'auto'
      }}>
{`React (TypeScript) + Vite
         ↓
    Electron Shell
         ↓
   WebSocket (secure)
         ↓
  Python FastAPI Backend
         ↓
    Ollama Local API`}
      </pre>
    </section>

    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Sparkles size={20} />
        Features
      </h3>
      <ul style={{ listStyle: 'none', paddingLeft: '0', marginBottom: '1rem' }}>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Ollama Integration:</strong> Full model management, streaming responses
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Voice I/O:</strong> Web Speech API + optional offline STT/TTS
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Security First:</strong> Local-only, encrypted storage, sandboxed execution
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Polished UI:</strong> Light/dark themes, accessibility, keyboard shortcuts
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Plugin System:</strong> User-defined commands with permissions
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Cross-Platform:</strong> Windows, macOS, Linux installers
        </li>
      </ul>
    </section>

    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Rocket size={20} />
        Quick Start
      </h3>
      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{ fontWeight: '500', marginBottom: '0.5rem', color: '#ffffff' }}>Prerequisites</h4>
        <ol style={{ listStyle: 'decimal', paddingLeft: '1.5rem', fontSize: '0.875rem' }}>
          <li style={{ marginBottom: '0.25rem' }}>
            <strong style={{ color: '#ffffff' }}>Ollama</strong> (required) - Install from ollama.ai/download
          </li>
          <li style={{ marginBottom: '0.25rem' }}>
            <strong style={{ color: '#ffffff' }}>Node.js 18+</strong>
          </li>
          <li style={{ marginBottom: '0.25rem' }}>
            <strong style={{ color: '#ffffff' }}>Python 3.10+</strong>
          </li>
        </ol>
      </div>
      
      <div style={{ marginTop: '1rem' }}>
        <h4 style={{ fontWeight: '500', marginBottom: '0.5rem', color: '#ffffff' }}>Development Setup</h4>
        <pre style={{ 
          backgroundColor: '#1a1a1a', 
          padding: '1rem', 
          borderRadius: '8px', 
          fontSize: '0.75rem',
          border: '1px solid #333333',
          overflowX: 'auto'
        }}>
{`git clone <repo-url>
cd jarvis
npm install

cd backend
python -m venv venv
source venv/bin/activate  # or venv\\Scripts\\activate on Windows
pip install -r requirements.txt

npm run dev`}
        </pre>
      </div>
    </section>

    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Lock size={20} />
        Security & Privacy
      </h3>
      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Local-first:</strong> All data stays on your machine
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>No telemetry:</strong> Zero analytics or tracking
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Encrypted storage:</strong> AES-256-GCM for chat history
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Sandboxed execution:</strong> Restricted environment for scripts
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <strong style={{ color: '#ffffff' }}>Audit logging:</strong> All actions logged with timestamps
        </li>
      </ul>
    </section>

    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Keyboard size={20} />
        Keyboard Shortcuts
      </h3>
      <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '0.875rem' }}>
        <li style={{ marginBottom: '0.25rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <code style={{ backgroundColor: '#1a1a1a', padding: '0.125rem 0.25rem', borderRadius: '4px' }}>
            Ctrl/Cmd + Shift + J
          </code> - Toggle main window
        </li>
        <li style={{ marginBottom: '0.25rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <code style={{ backgroundColor: '#1a1a1a', padding: '0.125rem 0.25rem', borderRadius: '4px' }}>
            Ctrl/Cmd + K
          </code> - Focus chat input
        </li>
        <li style={{ marginBottom: '0.25rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <code style={{ backgroundColor: '#1a1a1a', padding: '0.125rem 0.25rem', borderRadius: '4px' }}>
            Space
          </code> (hold) - Push-to-talk
        </li>
        <li style={{ marginBottom: '0.25rem', paddingLeft: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', top: '0.25rem' }}>•</span>
          <code style={{ backgroundColor: '#1a1a1a', padding: '0.125rem 0.25rem', borderRadius: '4px' }}>
            Esc
          </code> - Stop generation
        </li>
      </ul>
    </section>

    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Package size={20} />
        Building
      </h3>
      <pre style={{ 
        backgroundColor: '#1a1a1a', 
        padding: '1rem', 
        borderRadius: '8px', 
        fontSize: '0.75rem',
        border: '1px solid #333333',
        overflowX: 'auto'
      }}>
{`# Build for all platforms
npm run build:all

# Platform-specific
npm run build:win   # Windows (NSIS)
npm run build:mac   # macOS (DMG)
npm run build:linux # Linux (AppImage, deb, rpm)`}
      </pre>
    </section>

    <section>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <FileText size={20} />
        License
      </h3>
      <p style={{ fontSize: '0.875rem' }}>MIT License - Open source and free to use</p>
    </section>
  </div>
);

export default DocumentationContent;