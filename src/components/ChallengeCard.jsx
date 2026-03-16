import React, { useState } from 'react';
import { Download, FileText, Lock, Unlock, Zap, Copy, Check, TrendingUp, TerminalSquare } from 'lucide-react';

const ChallengeCard = ({ challenge, onViewWriteup }) => {
  const [copied, setCopied] = useState(false);

  const getDifficultyClass = (diff) => {
    switch (diff.toLowerCase()) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
      default: return 'difficulty-easy';
    }
  };

  // Check if writeup content exists and is not the generic "not yet available" placeholder
  const isWriteupAvailable = challenge.writeup && challenge.writeup !== "Writeup not yet available.";

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(`wget ${challenge.downloadUrl} -O ${challenge.file}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="challenge-card">
      <div className="challenge-header">
        <h3 className="challenge-title">{challenge.title}</h3>
      </div>
      
      <div className="card-meta-row">
        <span className={`tag-difficulty ${getDifficultyClass(challenge.difficulty)}`}>
          {challenge.difficulty}
        </span>
        <span className="challenge-pts">
          <Zap size={14} />
          {challenge.points} PTS
        </span>
        <span className="challenge-category">
          <TerminalSquare size={14} />
          {challenge.category}
        </span>
      </div>

      <div className="tags-container">
        {challenge.tags && challenge.tags.map(tag => (
          <span key={tag} className="challenge-tag">{tag}</span>
        ))}
      </div>
      
      <p className="challenge-desc">
        {challenge.description}
      </p>

      <div className="file-info">
        <div className="challenge-filename">
          <Lock size={14} style={{ color: '#00f0ff' }} />
          {challenge.file}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
          <div className="download-stats">
            <TrendingUp size={14} />
            {challenge.downloads || 0} Downloads
          </div>
          <button 
            onClick={handleCopyCommand}
            className="btn-icon" 
            title="Copy Wget Command"
            style={{ padding: '0.2rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      <div className="card-actions">
        <a 
          href={challenge.downloadUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          <Download size={18} />
          Download
        </a>
        <button 
          className="btn btn-secondary"
          disabled={!isWriteupAvailable}
          onClick={isWriteupAvailable ? onViewWriteup : () => alert('Writeup will be available after the CTF ends!')}
        >
          {isWriteupAvailable ? <Unlock size={18} /> : <FileText size={18} />}
          Writeup
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
