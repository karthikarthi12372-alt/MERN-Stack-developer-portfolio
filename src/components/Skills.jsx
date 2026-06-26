import React from 'react';
import { Layout, Server, Database, Settings, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="skill-cat-icon text-blue" size={22} />,
      skills: [
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "React.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "Bootstrap", level: "Intermediate" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="skill-cat-icon text-teal" size={22} />,
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" }
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="skill-cat-icon text-purple" size={22} />,
      skills: [
        { name: "MongoDB", level: "Intermediate" },
        { name: "Mongoose", level: "Intermediate" }
      ]
    },
    {
      title: "Developer Tools",
      icon: <Settings className="skill-cat-icon text-orange" size={22} />,
      skills: [
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Advanced" },
        { name: "Postman", level: "Intermediate" },
        { name: "VS Code", level: "Advanced" }
      ]
    },
    {
      title: "Deployment & Hosting",
      icon: <Cloud className="skill-cat-icon text-pink" size={22} />,
      skills: [
        { name: "Render", level: "Intermediate" },
        { name: "Vercel", level: "Intermediate" },
        { name: "Netlify", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Capabilities</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              className="glass-card skill-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <div className="skill-card-header">
                {category.icon}
                <h3 className="skill-card-title">{category.title}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-text">{skill.level}</span>
                    </div>
                    {/* Visual indicator bar */}
                    <div className="skill-progress-bg">
                      <div 
                        className={`skill-progress-bar ${
                          category.title.includes("Frontend") ? "bar-blue" :
                          category.title.includes("Backend") ? "bar-teal" :
                          category.title.includes("Database") ? "bar-purple" :
                          category.title.includes("Tools") ? "bar-orange" : "bar-pink"
                        }`} 
                        style={{ width: skill.level === "Advanced" ? "90%" : "70%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .skill-card {
          padding: 2rem;
          text-align: left;
          height: 100%;
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.75rem;
        }

        .skill-card-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
        }

        .skill-name {
          color: var(--text-primary);
          font-weight: 500;
        }

        .skill-level-text {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .skill-progress-bg {
          height: 5px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
          overflow: hidden;
        }

        .skill-progress-bar {
          height: 100%;
          border-radius: 9999px;
        }

        .bar-blue { background: #3b82f6; }
        .bar-teal { background: #0d9488; }
        .bar-purple { background: #a78bfa; }
        .bar-orange { background: #f97316; }
        .bar-pink { background: #ec4899; }

        .text-blue { color: #3b82f6; }
        .text-teal { color: #0d9488; }
        .text-purple { color: #a78bfa; }
        .text-orange { color: #f97316; }
        .text-pink { color: #ec4899; }

        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
