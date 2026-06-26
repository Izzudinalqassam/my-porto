/**
 * Tujuan: Education section — academic background & programs + 3D card tilt
 * Caller: App.jsx → education.jsx → EducationSection.jsx
 * Dependensi: framer-motion, lucide-react, data/education.js, hooks/useAnimations
 * Main Functions: EducationSection, EduCard
 * Side Effects: DOM mousemove listeners per card (cleaned up on leave)
 * Last Updated: 2026-06-26 (added 3D tilt, hover spring, stagger reveals)
 */

import { motion } from 'framer-motion';
import { useTilt } from '../../hooks/useAnimations';
import { GraduationCap, Cloud, ChevronRight, Award, MapPin, Calendar } from 'lucide-react';
import education from '../../data/education.js';

const iconMap = {
  GraduationCap: GraduationCap,
  Cloud: Cloud,
};

/* Separate component so useTilt hook is valid per card */
function EduCard({ edu, index }) {
  const IconComponent = iconMap[edu.icon] || GraduationCap;
  const isRecent = edu.period.includes('2026');
  const { tiltRef, style, handleMouseMove, handleMouseLeave } = useTilt(4);

  return (
    <motion.div
      ref={tiltRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="card-tech card-glow-border card-3d"
      style={{ padding: '1.5rem 1.75rem', ...style }}
    >
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400 }}
          style={{
            width: '40px', height: '40px', flexShrink: 0,
            border: '1px solid rgba(0, 214, 143, 0.2)',
            borderRadius: '8px',
            background: 'rgba(0, 214, 143, 0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          <IconComponent size={18} color="#00d68f" />
        </motion.div>

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
              <motion.div
                whileHover={{ scale: 1.06 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  padding: '4px 10px',
                  background: 'rgba(0, 214, 143, 0.08)',
                  border: '1px solid rgba(0, 214, 143, 0.2)',
                  borderRadius: '6px', cursor: 'default'
                }}
              >
                <Award size={12} color="#00d68f" />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem', fontWeight: 700, color: '#00d68f'
                }}>GPA {edu.gpa}</span>
              </motion.div>
            )}
          </div>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
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
              <motion.span
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem', padding: '2px 6px',
                  background: 'rgba(96, 165, 250, 0.1)',
                  color: '#60a5fa', borderRadius: '4px',
                  border: '1px solid rgba(96, 165, 250, 0.2)'
                }}
              >RECENT</motion.span>
            )}
          </div>

          {/* Highlights with stagger */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '1rem' }}>
            {edu.highlights.map((h, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + j * 0.06, duration: 0.3 }}
                style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
              >
                <ChevronRight size={13} color="#00d68f" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{h}</span>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {edu.skills.map((skill, j) => (
              <motion.span
                key={j}
                className="skill-tag"
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
          {education.map((edu, index) => (
            <EduCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
