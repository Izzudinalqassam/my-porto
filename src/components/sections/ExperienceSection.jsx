/**
 * Tujuan: Experience timeline section — clean tech-styled professional history
 * Caller: App.jsx → experiences.jsx → ExperienceSection.jsx
 * Dependensi: framer-motion, lucide-react, data/experiences.js
 * Main Functions: ExperienceSection
 * Side Effects: None
 * Last Updated: 2026-06-26 (redesign tech theme)
 */

import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import experiences from '../../data/experiences.js';

const levelColor = {
  'Contract': '#00d68f',
  'Internship': '#60a5fa',
  'Internship (MSIB Batch 7)': '#a78bfa',
  'Internship (MSIB Batch 5)': '#a78bfa',
};

const ExperienceSection = () => {
  return (
    <section id="experience" style={{ padding: '80px 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-label">// experience</span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: '#e2e8f0',
            letterSpacing: '-0.02em',
            marginTop: '0.5rem'
          }}>Professional Experience</h2>
          <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            3+ years across IT operations, system administration, and DevOps
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '17px',
            top: '18px',
            bottom: '18px',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(0, 214, 143, 0.4), rgba(0, 214, 143, 0.05))',
            display: 'none'
          }} className="timeline-line-desktop" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map((exp, index) => {
              const isPresent = exp.period.includes('Present');
              const accentColor = levelColor[exp.level] || '#60a5fa';

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    width: '36px', height: '36px', flexShrink: 0,
                    border: `1.5px solid ${isPresent ? '#00d68f' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: '50%',
                    background: isPresent ? 'rgba(0, 214, 143, 0.08)' : 'rgba(14, 22, 40, 0.8)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative'
                  }}>
                    {isPresent && (
                      <div style={{
                        width: '8px', height: '8px',
                        borderRadius: '50%',
                        background: '#00d68f',
                        animation: 'blink 2s ease-in-out infinite'
                      }} />
                    )}
                    {!isPresent && (
                      <div style={{
                        width: '6px', height: '6px',
                        borderRadius: '50%', background: '#475569'
                      }} />
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className="card-tech"
                    style={{ flex: 1, padding: '1.25rem 1.5rem' }}
                  >
                    {/* Header */}
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px',
                      marginBottom: '0.75rem'
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: '1rem', fontWeight: 600, color: '#e2e8f0',
                          marginBottom: '3px', display: 'flex', alignItems: 'center', gap: '8px'
                        }}>
                          {exp.title}
                          {isPresent && (
                            <span style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '0.65rem', padding: '2px 6px',
                              background: 'rgba(0, 214, 143, 0.12)',
                              color: '#00d68f', borderRadius: '4px',
                              border: '1px solid rgba(0, 214, 143, 0.25)'
                            }}>CURRENT</span>
                          )}
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: '#60a5fa', fontWeight: 500 }}>
                          {exp.company}
                        </p>
                      </div>

                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.68rem', padding: '3px 8px',
                        background: `${accentColor}12`,
                        color: accentColor,
                        borderRadius: '4px',
                        border: `1px solid ${accentColor}25`,
                        whiteSpace: 'nowrap'
                      }}>
                        {exp.level}
                      </span>
                    </div>

                    {/* Meta */}
                    <div style={{
                      display: 'flex', gap: '1.25rem', marginBottom: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: '5px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem', color: '#475569'
                      }}>
                        <Calendar size={11} /> {exp.period}
                      </span>
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: '5px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem', color: '#475569'
                      }}>
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>

                    {/* Achievements */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1rem' }}>
                      {exp.achievements.map((ach, j) => (
                        <div key={j} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <ChevronRight size={13} color="#00d68f" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {exp.skills.map((skill, j) => (
                        <span key={j} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
