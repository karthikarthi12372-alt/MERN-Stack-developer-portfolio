import React from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Side: Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge badge badge-blue">Available for Opportunities</span>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">KARTHI S</span>
          </h1>
          
          <h2 className="hero-subtitle">MERN Stack Developer</h2>
          
          <p className="hero-tagline">
            Specializing in building robust and scalable full stack web applications using MongoDB, Express.js, React.js, and Node.js. Committed to writing clean code, solving complex problems, and continuous professional growth.
          </p>

          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              <span>Contact Me</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Graphic Placeholder */}
        <motion.div 
          className="hero-graphic-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-illustration">
            {/* Premium Custom SVG representing Code & Tech Stack */}
            <svg 
              viewBox="0 0 500 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="tech-workspace-svg"
            >
              {/* Radial background glow */}
              <circle cx="250" cy="250" r="180" fill="url(#hero-glow)" opacity="0.4" />
              
              {/* Code window container */}
              <rect x="75" y="100" width="350" height="260" rx="12" fill="#0b0f19" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
              {/* Header of code window */}
              <path d="M75 112C75 105.373 80.3726 100 87 100H413C419.627 100 425 105.373 425 112V136H75V112Z" fill="#1e293b" />
              {/* Control buttons */}
              <circle cx="100" cy="118" r="6" fill="#ef4444" />
              <circle cx="120" cy="118" r="6" fill="#eab308" />
              <circle cx="140" cy="118" r="6" fill="#22c55e" />
              <text x="210" y="122" fill="#94a3b8" fontFamily="monospace" fontSize="12">App.jsx - MERN Project</text>
              
              {/* Grid Lines */}
              <line x1="75" y1="136" x2="425" y2="136" stroke="rgba(255,255,255,0.05)" />
              
              {/* Mock code lines */}
              <text x="95" y="170" fill="#38bdf8" fontFamily="monospace" fontSize="14">import</text>
              <text x="150" y="170" fill="#f8fafc" fontFamily="monospace" fontSize="14">React</text>
              <text x="195" y="170" fill="#38bdf8" fontFamily="monospace" fontSize="14">from</text>
              <text x="235" y="170" fill="#a78bfa" fontFamily="monospace" fontSize="14">'react'</text>
              
              <text x="95" y="200" fill="#f43f5e" fontFamily="monospace" fontSize="14">const</text>
              <text x="145" y="200" fill="#60a5fa" fontFamily="monospace" fontSize="14">Portfolio</text>
              <text x="225" y="200" fill="#e2e8f0" fontFamily="monospace" fontSize="14">= () =&gt; &#123;</text>
              
              <text x="120" y="230" fill="#f43f5e" fontFamily="monospace" fontSize="14">return</text>
              <text x="175" y="230" fill="#e2e8f0" fontFamily="monospace" fontSize="14">(</text>
              
              <text x="145" y="260" fill="#34d399" fontFamily="monospace" fontSize="14">&lt;div</text>
              <text x="185" y="260" fill="#fb923c" fontFamily="monospace" fontSize="14">className</text>
              <text x="260" y="260" fill="#a78bfa" fontFamily="monospace" fontSize="14">="MERN-Stack"</text>
              <text x="360" y="260" fill="#34d399" fontFamily="monospace" fontSize="14">&gt;</text>
              
              <text x="170" y="290" fill="#e2e8f0" fontFamily="monospace" fontSize="14">&lt;h1&gt;Building the Future&lt;/h1&gt;</text>
              
              <text x="145" y="320" fill="#34d399" fontFamily="monospace" fontSize="14">&lt;/div&gt;</text>
              <text x="120" y="340" fill="#e2e8f0" fontFamily="monospace" fontSize="14">);</text>
              
              {/* Floating tech icons */}
              {/* React (Blue) */}
              <g transform="translate(60, 310)">
                <rect x="0" y="0" width="50" height="50" rx="10" fill="#0f172a" stroke="#00d8ff" strokeWidth="1.5" />
                <path d="M15 25C15 28.5 25 32 25 32C25 32 35 28.5 35 25C35 21.5 25 18 25 18C25 18 15 21.5 15 25Z" stroke="#00d8ff" strokeWidth="1" fill="none"/>
                <path d="M25 15C21.5 15 18 25 18 25C18 25 21.5 35 25 35C28.5 35 32 25 32 25C32 25 28.5 15 25 15Z" stroke="#00d8ff" strokeWidth="1" fill="none"/>
                <circle cx="25" cy="25" r="3" fill="#00d8ff"/>
              </g>

              {/* Node.js (Green) */}
              <g transform="translate(390, 160)">
                <rect x="0" y="0" width="50" height="50" rx="10" fill="#0f172a" stroke="#22c55e" strokeWidth="1.5" />
                <path d="M25 13L35 19V31L25 37L15 31V19L25 13Z" stroke="#22c55e" strokeWidth="1.5" fill="none" />
                <path d="M25 13V37" stroke="#22c55e" strokeWidth="1" />
                <path d="M15 19L25 25L35 19" stroke="#22c55e" strokeWidth="1" />
              </g>

              {/* MongoDB (Teal/Green leaf) */}
              <g transform="translate(370, 320)">
                <rect x="0" y="0" width="50" height="50" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                <path d="M25 12C25 12 18 20 18 26C18 32 21 37 25 38C29 37 32 32 32 26C32 20 25 12 25 12Z" stroke="#10b981" strokeWidth="1.5" fill="none" />
                <path d="M25 12V38" stroke="#10b981" strokeWidth="1" />
              </g>

              {/* Express/JS (Yellow) */}
              <g transform="translate(40, 120)">
                <rect x="0" y="0" width="50" height="50" rx="10" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" />
                <text x="15" y="32" fill="#eab308" fontFamily="sans-serif" fontWeight="bold" fontSize="18">EX</text>
              </g>

              {/* Definitions */}
              <defs>
                <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 6.5rem;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-content {
          text-align: left;
        }

        .hero-badge {
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 3rem;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }

        .hero-subtitle {
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .hero-tagline {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 580px;
          margin-bottom: 2.5rem;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .hero-graphic-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-illustration {
          width: 100%;
          max-width: 460px;
          position: relative;
        }

        .tech-workspace-svg {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 50px rgba(2, 6, 23, 0.6));
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .tech-workspace-svg g {
          animation: float 4s ease-in-out infinite;
        }

        .tech-workspace-svg g:nth-child(even) {
          animation-delay: 2s;
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 1fr;
          }
          .hero-title {
            font-size: 3.75rem;
          }
          .hero-subtitle {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
