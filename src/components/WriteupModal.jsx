import React from 'react';
import ReactMarkdown from 'react-markdown';
import { X, Terminal, HelpCircle } from 'lucide-react';

const WriteupModal = ({ challenge, onClose }) => {
  if (!challenge) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            <Terminal size={24} style={{ display: 'inline', marginRight: '10px', verticalAlign: 'middle' }} />
            {challenge.title}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body markdown-content">
          <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', borderLeft: '3px solid #00f0ff', borderRadius: '0 8px 8px 0' }}>
            <h3 style={{ marginTop: 0, color: '#00f0ff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={18} /> Challenge Summary
            </h3>
            <p style={{ margin: 0, color: '#e2e8f0', fontSize: '0.95rem' }}>{challenge.description}</p>
          </div>
          <ReactMarkdown>{challenge.writeup}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default WriteupModal;
