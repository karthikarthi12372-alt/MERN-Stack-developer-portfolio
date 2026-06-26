import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        {/* Left Side: Brand and Copyright */}
        <div className="footer-brand-section">
          <a href="#home" className="footer-logo">
            <Code2 size={20} className="footer-logo-icon" />
            <span>KARTHI S</span>
          </a>
          <p className="footer-copyright">
            © {currentYear} KARTHI S. All Rights Reserved. Assessment Portfolio.
          </p>
        </div>

        {/* Right Side: Quick Links */}
        <div className="footer-links-section">
          <nav className="footer-nav">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <style>{`
        .portfolio-footer {
          border-top: 1px solid var(--border-color);
          background: #020617;
          padding: 3rem 0;
          margin-top: 4rem;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
        }

        .footer-brand-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .footer-logo-icon {
          color: var(--secondary-accent);
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-links-section {
          width: 100%;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
        }

        .footer-link {
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--text-primary);
        }

        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            gap: 0;
          }
          .footer-brand-section {
            align-items: flex-start;
          }
          .footer-nav {
            justify-content: flex-end;
            gap: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
