import React, { useState, useEffect } from 'react';
import { Terminal, Search, X } from 'lucide-react';
import ChallengeCard from './components/ChallengeCard';
import WriteupModal from './components/WriteupModal';
import { challenges } from './data/challenges';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeWriteup, setActiveWriteup] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [secretBuffer, setSecretBuffer] = useState('');

  useEffect(() => {
    // Simulate boot sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Secret key listener
      const key = e.key.toLowerCase();
      // Only process printable alphabet characters to prevent issues
      if (key.length === 1 && key.match(/[a-z]/)) {
        setSecretBuffer(prev => {
          const newBuffer = (prev + key).slice(-6); // dakshh is 6 chars
          if (newBuffer === 'dakshh') {
            setEasterEggActive(true);
            return '';
          }
          return newBuffer;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredChallenges = challenges.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.category.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (c.tags && c.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
                          
    const matchesDiff = filterDifficulty === 'All' || c.difficulty.toLowerCase() === filterDifficulty.toLowerCase();
    
    return matchesSearch && matchesDiff;
  });

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-terminal">
          <div className="loader-text">&gt; Initializing Reverse Engineering Portal</div>
          <div className="loader-bar-bg">
            <div className="loader-bar-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="hero-section">
        <div className="event-badge">Cyber Quest</div>
        <h1 className="app-title glowing-text">
          Dakshh Reverse Engineering Challenges
        </h1>
        <h2 className="app-subtitle">Dakshh Tech Fest 2026 | Heritage Institute of Technology, Kolkata</h2>
        <p className="app-description">
          Welcome to the official reverse engineering challenge portal for Cyber Quest at Dakshh Tech Fest 2026, hosted by Heritage Institute of Technology, Kolkata. Participants can download challenge files, analyze them, and explore the world of binary reversing, firmware analysis, and protocol investigation.
        </p>
      </header>

      <main>
        <section className="controls-section">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search by title, category, or tags..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="filter-group">
            {['All', 'Easy', 'Medium', 'Hard'].map(diff => (
              <button 
                key={diff}
                className={`filter-btn ${filterDifficulty === diff ? 'active' : ''}`}
                onClick={() => setFilterDifficulty(diff)}
              >
                {diff}
              </button>
            ))}
          </div>
        </section>

        <section>
          {filteredChallenges.length > 0 ? (
            <div className="challenges-grid">
              {filteredChallenges.map(challenge => (
                <ChallengeCard 
                  key={challenge.id} 
                  challenge={challenge} 
                  onViewWriteup={() => setActiveWriteup(challenge)}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#8b9bb4', padding: '3rem' }}>
              <Terminal size={48} style={{ opacity: 0.2, marginBottom: '1rem', display: 'inline-block' }} />
              <p>No challenges found matching your criteria.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-school">Dakshh Tech Fest 2026 | Heritage Institute of Technology, Kolkata</div>
        <div className="footer-event">Event: Cyber Quest</div>
        <div className="footer-msg">"Built for cybersecurity enthusiasts and reverse engineering explorers."</div>
      </footer>

      {activeWriteup && (
        <WriteupModal 
          challenge={activeWriteup} 
          onClose={() => setActiveWriteup(null)} 
        />
      )}

      {easterEggActive && (
        <div className="terminal-easter-egg">
          <div className="terminal-ee-header">
            <span>root@dakshh:~</span>
            <X size={14} style={{ cursor: 'pointer' }} onClick={() => setEasterEggActive(false)} />
          </div>
          <div className="terminal-ee-body">
            <p style={{ margin: 0 }}>&gt; Welcome, hacker.</p>
            <p style={{ margin: '0.5rem 0 0' }}>&gt; Ready to reverse the binaries?</p>
            <span style={{ display: 'inline-block', width: '8px', height: '14px', background: '#00f0ff', marginTop: '0.5rem', animation: 'blink 1s step-end infinite' }}></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
