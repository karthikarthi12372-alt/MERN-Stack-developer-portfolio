import React from 'react';
import { ExternalLink, ShoppingCart, Home, Utensils, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Import local project preview images
import auraPreview from '../assets/aura_preview.png';
import luxestayPreview from '../assets/luxestay_preview.png';
import bitecraftPreview from '../assets/bitecraft_preview.png';

// Local SVG component for GitHub icon
const GithubIcon = ({ size = 16, ...props }) => (
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

// ==========================================
// EDIT PROJECT DATA HERE
// ==========================================
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured digital storefront providing user accounts, catalogs, order management, and secure checkout processing.",
    technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Secure user registration & authentication (JWT)",
      "Dynamic search, category filters, and sorting",
      "Interactive cart management and checkout integration"
    ],
    githubUrl: "https://github.com/karthikarthi12372-alt",
    demoUrl: "https://e-commerce-project-sjlb.vercel.app/",
    image: auraPreview
  },
  {
    id: 2,
    title: "Hotel Room Booking System",
    description: "An online platform for searching available hotel rooms, reserving accommodation, and viewing booking histories.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Room filtering by type, price, and availability",
      "Interactive reservation calendar & booking scheduling",
      "Admin dashboard to update room status & view statistics"
    ],
    githubUrl: "https://github.com/karthikarthi12372-alt",
    demoUrl: "https://hotel-room-booking-flax.vercel.app/",
    image: luxestayPreview
  },
  {
    id: 3,
    title: "Food Restaurant Management System",
    description: "A software application for managing restaurant menus, taking client orders, and handling kitchen ticket queues.",
    technologies: ["React.js", "CSS3", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Real-time order submission and tracking dashboard",
      "Admin panel to manage menu items, prices, and categories",
      "Chef workspace to process and update cooking statuses"
    ],
    githubUrl: "https://github.com/karthikarthi12372-alt",
    demoUrl: "https://food-resturant-swart-ten.vercel.app/",
    image: bitecraftPreview
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">My Works</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="grid-3">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="glass-card project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Project Image Preview */}
              <div className="project-thumbnail">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-thumbnail-img" 
                  loading="lazy"
                />
              </div>

              {/* Project Info */}
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Features List */}
                <div className="project-features-container">
                  <h4 className="details-heading">Key Features:</h4>
                  <ul className="project-features-list">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="project-feature-item">
                        <CheckCircle2 size={14} className="feature-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="project-tech-container">
                  <h4 className="details-heading">Technologies:</h4>
                  <div className="project-tech-badges">
                    {project.technologies.map((tech, tIndex) => (
                      <span key={tIndex} className="badge badge-blue project-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="project-actions">
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm project-action-btn"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm project-action-btn"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: rgba(15, 23, 42, 0.2);
          position: relative;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          height: 100%;
        }

        .project-thumbnail {
          height: 180px;
          background: #0b0f19;
          position: relative;
          border-bottom: 1px solid var(--border-color);
          overflow: hidden;
        }

        .project-thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-thumbnail-img {
          transform: scale(1.06);
        }

        .project-details {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          text-align: left;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .project-description {
          font-size: 0.925rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        .details-heading {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .project-features-container {
          margin-bottom: 1.25rem;
        }

        .project-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .project-feature-item {
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          line-height: 1.4;
        }

        .feature-check-icon {
          color: var(--secondary-accent);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .project-tech-container {
          margin-bottom: 1.75rem;
        }

        .project-tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tech-badge {
          font-size: 0.7rem;
          padding: 0.15rem 0.5rem;
        }

        .project-actions {
          margin-top: auto;
          display: flex;
          gap: 0.75rem;
        }

        .project-action-btn {
          flex: 1;
          font-size: 0.85rem;
          padding: 0.6rem;
          gap: 0.35rem;
        }

        .text-blue { color: #3b82f6; }
        .text-teal { color: #0d9488; }
        .text-purple { color: #a78bfa; }
      `}</style>
    </section>
  );
}
