import React from 'react';
import { BookOpen, GraduationCap, Compass, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const pillars = [
    {
      icon: <GraduationCap className="about-card-icon text-blue" size={24} />,
      title: "GUVI MERN Certification",
      description: "Successfully completed intensive Full Stack Development training program at GUVI, mastering front-end and back-end integration."
    },
    {
      icon: <BookOpen className="about-card-icon text-teal" size={24} />,
      title: "Continuous Learning",
      description: "Dedicated to exploring emerging tech, reading documentation, and building self-driven tools to expand programming capabilities."
    },
    {
      icon: <Compass className="about-card-icon text-purple" size={24} />,
      title: "Project-Based Learning",
      description: "Acquired depth by designing, modeling, and building real-world software applications from scratch, deploying databases and servers."
    },
    {
      icon: <HelpCircle className="about-card-icon text-red" size={24} />,
      title: "Problem Solving",
      description: "Strong understanding of data structures, algorithm design, and API design to create efficient, maintainable web systems."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Profile Summary</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Story */}
          <motion.div 
            className="about-story"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="about-subtitle">Fresher MERN Stack Developer</h3>
            <p className="about-text">
              As an entry-level Full Stack Developer, I have built a robust foundation in <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I am highly motivated by the challenge of transforming complex back-end operations and databases into clean, intuitive, and responsive user experiences.
            </p>
            <p className="about-text">
              Rather than traditional commercial experience, my portfolio is built on a series of rigorous, <strong>project-based learning</strong> initiatives. Each application I build allows me to solve logical challenges, from implementing JWT authentication to schema validations.
            </p>
            
            <div className="career-objective-box">
              <h4 className="objective-title">Career Objective</h4>
              <p className="objective-text">
                To secure a challenging role as a MERN Stack Developer in a progressive organization, where I can apply my programming skills, deliver clean code, contribute to team success, and continuously upgrade my knowledge of modern web technologies.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars */}
          <div className="about-pillars-grid">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index} 
                className="glass-card about-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="about-card-header">
                  {pillar.icon}
                  <h4 className="about-card-title">{pillar.title}</h4>
                </div>
                <p className="about-card-desc">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: rgba(15, 23, 42, 0.2);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: flex-start;
        }

        .about-story {
          text-align: left;
        }

        .about-subtitle {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .about-text {
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          font-size: 1.025rem;
          line-height: 1.7;
        }

        .about-text strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .career-objective-box {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(37, 99, 235, 0.05);
          border-left: 4px solid var(--primary-accent);
          border-radius: 4px 12px 12px 4px;
        }

        .objective-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .objective-text {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .about-card {
          padding: 1.5rem;
          text-align: left;
        }

        .about-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .about-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .about-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .text-blue { color: #3b82f6; }
        .text-teal { color: #0d9488; }
        .text-purple { color: #a78bfa; }
        .text-red { color: #f87171; }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1.1fr;
            gap: 4rem;
          }
          .about-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
