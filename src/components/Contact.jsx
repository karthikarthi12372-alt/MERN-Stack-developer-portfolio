import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 4) {
      newErrors.subject = 'Subject must be at least 4 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user begins typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setSubmitError(false);

    if (validate()) {
      // Mock API call success
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setSubmitError(true);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <motion.div 
            className="contact-info-panel"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              I am open to discussions about fresher roles, junior development positions, internships, or technical collaborations. Drop me a message and I will respond promptly.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <Mail size={20} className="detail-icon text-blue" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Email Address</span>
                  <a href="mailto:karthikarthi12372@gmail.com" className="detail-value">
                    karthikarthi12372@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <Phone size={20} className="detail-icon text-teal" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Phone Number</span>
                  <a href="tel:+919360426584" className="detail-value">
                    +91 93604 26584
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="glass-card contact-form-card"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitSuccess && (
              <div className="alert alert-success">
                <CheckCircle size={20} />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            {submitError && (
              <div className="alert alert-error">
                <AlertCircle size={20} />
                <span>Please correct the errors in the form before submitting.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  className={`form-control ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com" 
                  className={`form-control ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?" 
                  className={`form-control ${errors.subject ? 'input-error' : ''}`}
                />
                {errors.subject && <p className="form-error">{errors.subject}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  placeholder="Write your message here..." 
                  className={`form-control ${errors.message ? 'input-error' : ''}`}
                ></textarea>
                {errors.message && <p className="form-error">{errors.message}</p>}
              </div>

              <button type="submit" className="btn btn-primary contact-submit-btn">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: flex-start;
        }

        .contact-info-panel {
          text-align: left;
        }

        .contact-info-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .contact-info-desc {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1rem;
          line-height: 1.6;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .detail-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .detail-icon {
          flex-shrink: 0;
        }

        .detail-text {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .detail-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .detail-value {
          font-size: 1.05rem;
          color: var(--text-primary);
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .detail-value:hover {
          color: var(--secondary-accent);
        }

        .contact-recruiter-notice {
          margin-top: 2.5rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--border-color);
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .accent-link {
          color: var(--secondary-accent);
          font-weight: 500;
          text-decoration: underline;
        }

        .contact-form-card {
          padding: 2.5rem;
        }

        .input-error {
          border-color: rgba(239, 68, 68, 0.4);
        }

        .input-error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
        }

        .contact-submit-btn {
          width: 100%;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
}
