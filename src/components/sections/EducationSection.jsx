/**
 * Tujuan: Education section — academic background & programs
 * Caller: App.jsx → education.jsx → EducationSection.jsx
 * Dependensi: framer-motion, lucide-react, data/education.js
 * Main Functions: EducationSection
 * Side Effects: None
 * Last Updated: 2026-06-26 (redesign tech theme + tambah GCP program)
 */

import { motion } from 'framer-motion';
import { GraduationCap, Cloud, ChevronRight, Award, MapPin, Calendar } from 'lucide-react';
import education from '../../data/education.js';

const iconMap = {
  GraduationCap: GraduationCap,
  Cloud: Cloud,
};

const EducationSection = () => {
  return (
    <section id="education" style={{ padding: '80px 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-label">// education</span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: '#e2e8f0',
            letterSpacing: '-0.02em',
            marginTop: '0.5rem'
          }}>Education & Programs</h2>
        </motion.div>

        {/* Education cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {education.map((edu, index) => {
            const IconComponent = iconMap[edu.icon] || GraduationCap;
            const isRecent = edu.period.includes('2026');

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-tech"
                style={{ padding: '1.5rem 1.75rem' }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  {/* Icon */}
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    border: '1px solid rgba(0, 214, 143, 0.2)',
                    borderRadius: '8px',
                    background: 'rgba(0, 214, 143, 0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <IconComponent size={18} color="#00d68f" />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    {/* Header */}
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px',
                      marginBottom: '0.5rem'
                    }}>
                      <div>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '2px' }}>
                          {edu.degree}
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: '#60a5fa', fontWeight: 500 }}>
                          {edu.institution}
                        </p>
                      </div>

                      {edu.gpa && (
                        <div style={{
                          display: 'flex', alignItems: 'center', gap: '5px',
                          padding: '4px 10px',
                          background: 'rgba(0, 214, 143, 0.08)',
                          border: '1px solid rgba(0, 214, 143, 0.2)',
                          borderRadius: '6px'
                        }}>
                          <Award size={12} color="#00d68f" />
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.78rem', fontWeight: 700, color: '#00d68f'
                          }}>GPA {edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Meta */}
                    <div style={{
                      display: 'flex', gap: '1.25rem',
                      marginBottom: '1rem', flexWrap: 'wrap'
                    }}>
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: '5px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem', color: '#475569'
                      }}>
                        <Calendar size={11} /> {edu.period}
                      </span>
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: '5px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem', color: '#475569'
                      }}>
                        <MapPin size={11} /> {edu.location}
                      </span>
                      {isRecent && (
                        <span style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.65rem', padding: '2px 6px',
                          background: 'rgba(96, 165, 250, 0.1)',
                          color: '#60a5fa', borderRadius: '4px',
                          border: '1px solid rgba(96, 165, 250, 0.2)'
                        }}>RECENT</span>
                      )}
                    </div>

                    {/* Highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '1rem' }}>
                      {edu.highlights.map((h, j) => (
                        <div key={j} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <ChevronRight size={13} color="#00d68f" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {edu.skills.map((skill, j) => (
                        <span key={j} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
