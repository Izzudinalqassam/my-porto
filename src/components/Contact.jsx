/**
 * Tujuan: Contact section — contact info, social links, dan CTA
 * Caller: App.jsx → Contact.jsx
 * Dependensi: framer-motion, lucide-react
 * Main Functions: Contact
 * Side Effects: None
 * Last Updated: 2026-06-26 (update phone number + redesign tech theme)
 */

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'izzudin.alqa@gmail.com', href: 'mailto:izzudin.alqa@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+62 856-9326-8094', href: 'tel:+6285693268094' },
  { icon: MapPin, label: 'Location', value: 'South Jakarta, Indonesia', href: null },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', value: 'github.com/Izzudinalqassam', href: 'https://github.com/Izzudinalqassam' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/izzudinalqassam', href: 'https://linkedin.com/in/izzudinalqassam' },
];

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '80px 1.5rem 120px', position: 'relative' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-label">// contact</span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: '#e2e8f0',
            letterSpacing: '-0.02em',
            marginTop: '0.5rem'
          }}>Get In Touch</h2>
          <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Open to IT Operations, DevOps Engineer, and System Administrator opportunities
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card-tech"
            style={{ padding: '1.5rem' }}
          >
            <span className="section-label" style={{ display: 'block', marginBottom: '1.25rem' }}>
              // direct_contact
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map((info, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '32px', height: '32px', flexShrink: 0,
                    border: '1px solid rgba(0, 214, 143, 0.15)',
                    borderRadius: '6px',
                    background: 'rgba(0, 214, 143, 0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <info.icon size={14} color="#00d68f" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem', color: '#475569', marginBottom: '2px',
                      textTransform: 'uppercase', letterSpacing: '0.08em'
                    }}>{info.label}</div>
                    {info.href ? (
                      <a href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ fontSize: '0.88rem', color: '#e2e8f0', textDecoration: 'none' }}
                        onMouseEnter={e => e.target.style.color = '#00d68f'}
                        onMouseLeave={e => e.target.style.color = '#e2e8f0'}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div style={{
              marginTop: '1.5rem', padding: '10px 14px',
              background: 'rgba(0, 214, 143, 0.05)',
              border: '1px solid rgba(0, 214, 143, 0.15)',
              borderRadius: '6px',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <div style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#00d68f',
                boxShadow: '0 0 6px rgba(0, 214, 143, 0.6)',
                animation: 'blink 2s ease-in-out infinite'
              }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#00d68f', fontWeight: 600 }}>
                  Available for Opportunities
                </div>
                <div style={{ fontSize: '0.72rem', color: '#475569' }}>
                  Full-time · Remote · Hybrid
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {/* Social links */}
            <div className="card-tech" style={{ padding: '1.5rem' }}>
              <span className="section-label" style={{ display: 'block', marginBottom: '1.25rem' }}>
                // social_profiles
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '10px 12px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      transition: 'border-color 0.2s, background 0.2s'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(0, 214, 143, 0.25)';
                      e.currentTarget.style.background = 'rgba(0, 214, 143, 0.04)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <social.icon size={15} color="#94a3b8" />
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#475569', fontFamily: "'JetBrains Mono', monospace" }}>
                          {social.label}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#e2e8f0' }}>{social.value}</div>
                      </div>
                    </div>
                    <ExternalLink size={13} color="#475569" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="card-tech" style={{
              padding: '1.5rem',
              background: 'rgba(0, 214, 143, 0.04)',
              borderColor: 'rgba(0, 214, 143, 0.12)'
            }}>
              <p style={{
                fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.25rem'
              }}>
                Ready to bring expertise in infrastructure automation, monitoring, and system reliability to your team.
              </p>
              <a
                href="mailto:izzudin.alqa@gmail.com"
                className="btn-primary"
                style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
              >
                <Mail size={14} /> Send Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem', color: '#2d3748'
          }}>
            © 2026 Izzudin Alqassam · Built with React + Vite
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
