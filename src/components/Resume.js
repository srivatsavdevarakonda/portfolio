import React, { useState, useEffect } from 'react';
import './Resume.css';

function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  // Simulate download counter (in real app, this would come from backend)
  useEffect(() => {
    const savedCount = localStorage.getItem('resumeDownloads') || '0';
    setDownloadCount(parseInt(savedCount));
  }, []);

  const handleDownload = async (e) => {
    e.preventDefault();
    setIsDownloading(true);

    // Simulate download process
    setTimeout(() => {
      // Create download link
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Devarakonda_Srivatsav_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Update download count
      const newCount = downloadCount + 1;
      setDownloadCount(newCount);
      localStorage.setItem('resumeDownloads', newCount.toString());
      
      setIsDownloading(false);
    }, 1500);
  };

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Devarakonda Srivatsav - Resume',
          text: 'Check out my professional resume',
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // Show temporary notification
      const notification = document.createElement('div');
      notification.textContent = 'Link copied to clipboard!';
      notification.className = 'copy-notification';
      document.body.appendChild(notification);
      setTimeout(() => document.body.removeChild(notification), 2000);
    }
  };

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        {/* Animated background elements */}
        <div className="bg-animation">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        {/* Main content */}
        <div className="resume-content">
          <div className="resume-header">
            <h2 className="resume-title">
              <span className="title-icon">📄</span>
              My Resume
            </h2>
            <p className="resume-subtitle">
              Explore my professional journey and download my latest resume
            </p>
          </div>

          {/* Stats card */}
          <div className="stats-card">
            <div className="stat-item">
              <span className="stat-number">{downloadCount}</span>
              <span className="stat-label">Downloads</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2024</span>
              <span className="stat-label">Updated</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">PDF</span>
              <span className="stat-label">Format</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="resume-actions">
            <button 
              className={`download-btn ${isDownloading ? 'downloading' : ''}`}
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <span className="btn-icon">
                {isDownloading ? '⏳' : '⬇️'}
              </span>
              <span className="btn-text">
                {isDownloading ? 'Preparing Download...' : 'Download Resume'}
              </span>
              {isDownloading && <div className="loading-bar"></div>}
            </button>

            <button className="preview-btn" onClick={handlePreview}>
              <span className="btn-icon">👁️</span>
              <span className="btn-text">
                {showPreview ? 'Hide Preview' : 'Quick Preview'}
              </span>
            </button>

            <button className="share-btn" onClick={handleShare}>
              <span className="btn-icon">🔗</span>
              <span className="btn-text">Share</span>
            </button>
          </div>

          {/* Preview section */}
          {showPreview && (
            <div className="preview-section">
              <div className="preview-card">
                <h3>Resume Preview</h3>
                <div className="preview-content">
                  <div className="preview-item">
                    <strong>Experience:</strong> Web Development & Cybersecurity
                  </div>
                  <div className="preview-item">
                    <strong>Skills:</strong> Python, Machine Learning, Problem Solving
                  </div>
                  <div className="preview-item">
                    <strong>Education:</strong> Computer Science Background
                  </div>
                  <div className="preview-item">
                    <strong>Projects:</strong> Multiple full-stack applications
                  </div>
                </div>
                <div className="preview-note">
                  💡 Download the full PDF for complete details
                </div>
              </div>
            </div>
          )}

          {/* Feature highlights */}
          <div className="feature-highlights">
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span className="feature-text">Professional Format</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔄</span>
              <span className="feature-text">Recently Updated</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📱</span>
              <span className="feature-text">Mobile Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;