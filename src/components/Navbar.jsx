import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Local SVG components for brand icons since brand icons are removed in recent lucide-react versions
const GithubIcon = ({ size = 20, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <Code2 size={24} className="nav-logo-icon" />
            <span className="nav-logo-text">Portfolio</span>
          </a>

          {/* Desktop Menu */}
          <div className="nav-menu-desktop">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-actions-desktop">
            <a 
              href="https://github.com/karthikarthi12372-alt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-social-link"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/karthi-s-181961392?utm_source=share_via&amp;utm_content=profile&amp;utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="nav-mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="nav-mobile-menu">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="nav-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="nav-mobile-socials">
                <a 
                  href="https://github.com/karthikarthi12372-alt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-mobile-social-link"
                >
                  <GithubIcon size={22} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/karthi-s-181961392?utm_source=share_via&amp;utm_content=profile&amp;utm_medium=member_android" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-mobile-social-link"
                >
                  <LinkedinIcon size={22} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4.5rem;
          z-index: 100;
          display: flex;
          align-items: center;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .nav-container {
          width: 90%;
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .nav-logo-icon {
          color: var(--secondary-accent);
        }

        .nav-menu-desktop {
          display: none;
          gap: 1.5rem;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s ease;
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-actions-desktop {
          display: none;
          align-items: center;
          gap: 1rem;
        }

        .nav-social-link {
          color: var(--text-secondary);
          transition: color 0.2s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
        }

        .nav-social-link:hover {
          color: var(--secondary-accent);
          transform: translateY(-2px);
        }

        .nav-toggle {
          display: block;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        .nav-mobile-drawer {
          position: fixed;
          top: 4.5rem;
          left: 0;
          width: 100%;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          z-index: 99;
          padding: 1.5rem 0 2rem;
        }

        .nav-mobile-menu {
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .nav-mobile-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-mobile-link:hover {
          color: var(--text-primary);
        }

        .nav-mobile-socials {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
          padding-top: 0.5rem;
        }

        .nav-mobile-social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .nav-mobile-social-link:hover {
          color: var(--secondary-accent);
        }

        @media (min-width: 768px) {
          .nav-menu-desktop {
            display: flex;
          }
          .nav-actions-desktop {
            display: flex;
          }
          .nav-toggle {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
