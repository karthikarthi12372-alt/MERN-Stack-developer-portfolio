import React from 'react';
import { FileText, Download, Eye, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Curriculum Vitae</span>
          <h2 className="section-title">Resume</h2>
        </div>

        <div className="resume-container">
          <motion.div 
            className="glass-card resume-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Interactive Document Preview Mockup */}
            <div className="resume-preview-panel">
              <div className="preview-header">
                <div className="preview-dot red"></div>
                <div className="preview-dot yellow"></div>
                <div className="preview-dot green"></div>
                <span className="preview-title">Resume_Preview.pdf</span>
              </div>
              <div className="preview-body">
                <div className="preview-line-title"></div>
                <div className="preview-line-subtitle"></div>
                <div className="preview-divider"></div>
                <div className="preview-section-title"></div>
                <div className="preview-line-text long"></div>
                <div className="preview-line-text medium"></div>
                <div className="preview-line-text short"></div>
                <div className="preview-divider"></div>
                <div className="preview-section-title"></div>
                <div className="preview-line-text medium"></div>
                <div className="preview-line-text long"></div>
              </div>
            </div>

            {/* Resume Call To Actions */}
            <div className="resume-download-details">
              <div className="resume-icon-wrapper">
                <FileText size={32} className="resume-meta-icon" />
              </div>
              <h3 className="resume-doc-title">Professional Resume</h3>
              <p className="resume-doc-meta">PDF Format • Updated June 2026</p>
              
              <ul className="resume-bullet-highlights">
                <li>
                  <FileCheck size={16} className="bullet-icon" />
                  <span>Tailored for MERN Stack Development roles</span>
                </li>
                <li>
                  <FileCheck size={16} className="bullet-icon" />
                  <span>Verified HCL GUVI FSD Certification details</span>
                </li>
                <li>
                  <FileCheck size={16} className="bullet-icon" />
                  <span>Clean and recruiter-optimized layout</span>
                </li>
              </ul>

              <div className="resume-action-buttons">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline resume-action-btn"
                >
                  <Eye size={18} />
                  <span>View Resume</span>
                </a>
                
                <a 
                  href="/resume.pdf" 
                  download="KARTHI_S_MERN_Resume.pdf" 
                  className="btn btn-primary resume-action-btn"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .resume-section {
          background-color: rgba(15, 23, 42, 0.2);
          position: relative;
        }

        .resume-container {
          max-width: 850px;
          margin: 0 auto;
        }

        .resume-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          padding: 2rem;
          align-items: center;
        }

        /* Document Preview Mockup Styling */
        .resume-preview-panel {
          background: #0b0f19;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          height: 320px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .preview-header {
          background: #1e293b;
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .preview-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .preview-dot.red { background: #ef4444; }
        .preview-dot.yellow { background: #eab308; }
        .preview-dot.green { background: #22c55e; }

        .preview-title {
          font-family: monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-left: 0.5rem;
        }

        .preview-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .preview-line-title {
          width: 50%;
          height: 14px;
          background: var(--primary-accent);
          border-radius: 4px;
          opacity: 0.8;
        }

        .preview-line-subtitle {
          width: 30%;
          height: 8px;
          background: var(--text-muted);
          border-radius: 4px;
          opacity: 0.4;
        }

        .preview-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.05);
          margin: 0.25rem 0;
        }

        .preview-section-title {
          width: 25%;
          height: 10px;
          background: var(--secondary-accent);
          border-radius: 4px;
          opacity: 0.8;
        }

        .preview-line-text {
          height: 6px;
          background: var(--text-secondary);
          border-radius: 4px;
          opacity: 0.25;
        }

        .preview-line-text.long { width: 90%; }
        .preview-line-text.medium { width: 75%; }
        .preview-line-text.short { width: 45%; }

        /* Download Panel Styling */
        .resume-download-details {
          text-align: left;
        }

        .resume-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid rgba(37, 99, 235, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .resume-meta-icon {
          color: var(--primary-accent);
        }

        .resume-doc-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .resume-doc-meta {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .resume-bullet-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 2rem;
        }

        .resume-bullet-highlights li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.925rem;
          color: var(--text-secondary);
        }

        .bullet-icon {
          color: var(--secondary-accent);
          flex-shrink: 0;
        }

        .resume-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .resume-action-btn {
          width: 100%;
          gap: 0.5rem;
        }

        @media (min-width: 768px) {
          .resume-card {
            grid-template-columns: 1fr 1.2fr;
            gap: 4rem;
            padding: 3rem;
          }
          .resume-action-buttons {
            flex-direction: row;
          }
          .resume-action-btn {
            width: auto;
          }
        }
      `}</style>
    </section>
  );
}
