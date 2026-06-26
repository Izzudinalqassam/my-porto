/**
 * Tujuan: Experience timeline section — clean tech-styled professional history + 3D card tilt
 * Caller: App.jsx → experiences.jsx → ExperienceSection.jsx
 * Dependensi: framer-motion, lucide-react, data/experiences.js, hooks/useAnimations
 * Main Functions: ExperienceSection
 * Side Effects: DOM mousemove listeners (per card, cleaned up on leave)
 * Last Updated: 2026-06-26 (added 3D tilt, timeline line-draw, stagger)
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { useTilt } from '../../hooks/useAnimations';
import experiences from '../../data/experiences.js';

const levelColor = {
  'Contract': '#00d68f',
  'Internship': '#60a5fa',
  'Internship (MSIB Batch 7)': '#a78bfa',
  'Internship (MSIB Batch 5)': '#a78bfa',
};

/* Timeline line that draws itself on scroll */
function TimelineLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} style={{
      position: 'absolute',
      left: '17px',
      top: '18px',
      bottom: '18px',
      width: '1px',
      background: 'linear-gradient(to bottom, rgba(0,214,143,0.5), rgba(0,214,143,0.05))',
      transformOrigin: 'top',
      transform: isInView ? 'scaleY(1)' : 'scaleY(0)',
      transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
      display: 'none',
    }}
    className="timeline-line-desktop"
    />
  );
}

/* Experience card with 3D tilt */
function ExpCard({ exp, index, isPresent, accentColor }) {
  const { tiltRef, style, handleMouseMove, handleMouseLeave } = useTilt(5);

  return (
    <motion.div
      key={exp.id}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
    >
      {/* Animated timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.2 }}
        style={{
          width: '36px', height: '36px', flexShrink: 0,
          border: `1.5px solid ${isPresent ? '#00d68f' : 'rgba(255,255,255,0.1)'}`,
          borderRadius: '50%',
          background: isPresent ? 'rgba(0, 214, 143, 0.08)' : 'rgba(14, 22, 40, 0.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}
        className={isPresent ? 'anim-glow' : ''}
      >
        {isPresent ? (
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%', background: '#00d68f',
          }} />
        ) : (
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#475569' }} />
        )}
      </motion.div>

      {/* 3D tilt card */}
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-tech card-glow-border card-3d"
        style={{ flex: 1, padding: '1.25rem 1.5rem', ...style }}
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
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem', padding: '2px 6px',
                    background: 'rgba(0, 214, 143, 0.12)',
                    color: '#00d68f', borderRadius: '4px',
                    border: '1px solid rgba(0, 214, 143, 0.25)'
                  }}
                >
                  CURRENT
                </motion.span>
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
          display: 'flex', gap: '1.25rem', marginBottom: '1rem', flexWrap: 'wrap'
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

        {/* Achievements — stagger on card hover */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1rem' }}>
          {exp.achievements.map((ach, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 + j * 0.06 }}
              style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
            >
              <ChevronRight size={13} color="#00d68f" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{ach}</span>
            </motion.div>
          ))}
        </div>

        {/* Skill tags with hover pop */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {exp.skills.map((skill, j) => (
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
    </motion.div>
  );
}

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
          <TimelineLine />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map((exp, index) => {
              const isPresent = exp.period.includes('Present');
              const accentColor = levelColor[exp.level] || '#60a5fa';
              return (
                <ExpCard
                  key={exp.id}
                  exp={exp}
                  index={index}
                  isPresent={isPresent}
                  accentColor={accentColor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
