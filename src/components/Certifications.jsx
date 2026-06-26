import React from 'react';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certification-container">
          <motion.div 
            className="glass-card certification-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Left side: Graphic award badge */}
            <div className="cert-badge-container">
              <div className="cert-glow"></div>
              <Award size={64} className="cert-award-icon" />
            </div>

            {/* Right side: Credentials details */}
            <div className="cert-details">
              <span className="badge badge-blue cert-tag">Verified Certificate</span>
              <h3 className="cert-name">HCL GUVI Full Stack Development Certification</h3>
              <p className="cert-issuer">Issued by: <strong>GUVI Geek Network Private Limited</strong></p>
              
              <p className="cert-description">
                Comprehensive training curriculum validating proficiency in building complete MERN stack applications. The assessment covers data modeling with MongoDB, designing robust REST APIs with Express and Node.js, and implementing responsive modular frontend architectures with React.js.
              </p>

              <div className="cert-footer">
                <div className="cert-status">
                  <ShieldCheck size={18} className="shield-icon" />
                  <span>Credential ID: GUVI-MERN-FSD-PLACEHOLDER</span>
                </div>
                
                <a 
                  href="https://drive.google.com/file/d/1uRYqABSrrVfUVfINufJefXuApAaAU0ug/view?usp=drivesdk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary cert-btn"
                >
                  <span>View Certificate</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .certifications-section {
          position: relative;
        }

        .certification-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .certification-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2.5rem;
          text-align: left;
        }

        .cert-badge-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid rgba(37, 99, 235, 0.15);
          flex-shrink: 0;
        }

        .cert-glow {
          position: absolute;
          width: 60px;
          height: 60px;
          background: var(--primary-accent);
          filter: blur(25px);
          opacity: 0.25;
        }

        .cert-award-icon {
          color: var(--primary-accent);
          position: relative;
          z-index: 1;
        }

        .cert-details {
          flex-grow: 1;
        }

        .cert-tag {
          margin-bottom: 0.75rem;
        }

        .cert-name {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .cert-issuer {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .cert-issuer strong {
          color: var(--text-primary);
        }

        .cert-description {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .cert-footer {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: flex-start;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.25rem;
        }

        .cert-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .shield-icon {
          color: var(--secondary-accent);
        }

        .cert-btn {
          width: 100%;
          gap: 0.35rem;
        }

        @media (min-width: 768px) {
          .certification-card {
            flex-direction: row;
            padding: 3rem;
          }
          .cert-footer {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .cert-btn {
            width: auto;
          }
        }
      `}</style>
    </section>
  );
}
