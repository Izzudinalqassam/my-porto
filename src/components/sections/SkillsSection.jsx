/**
 * Tujuan: Skills section — technical skills showcase dengan animasi stagger + 3D tilt
 * Caller: App.jsx → Skills.jsx → SkillsSection.jsx
 * Dependensi: framer-motion, lucide-react, data/skills.js, hooks/useAnimations
 * Main Functions: SkillsSection
 * Side Effects: DOM mousemove listeners per card
 * Last Updated: 2026-06-26 (added stagger reveal, 3D tilt, hover spring)
 */

import { motion } from 'framer-motion';
import {
  Server, GitBranch, Activity, Database, Code2,
  Cloud, Shield, Cpu
} from 'lucide-react';
import { useTilt } from '../../hooks/useAnimations';
import skills from '../../data/skills.js';

const iconMap = { Server, GitBranch, Activity, Database, Code2, Cloud, Shield, Cpu };

const accentColors = [
  '#00d68f', '#3b7cf7', '#60a5fa', '#7c3aed',
  '#f59e0b', '#38bdf8', '#f43f5e', '#84cc16'
];

/* Container variant for stagger */
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

/* Skill category card with 3D tilt */
function SkillCard({ category, index }) {
  const IconComponent = iconMap[category.icon] || Code2;
  const accent = accentColors[index % accentColors.length];
  const { tiltRef, style, handleMouseMove, handleMouseLeave } = useTilt(5);

  return (
    <motion.div
      variants={itemVariant}
      ref={tiltRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-tech card-glow-border card-3d"
      style={{ padding: '1.25rem', ...style }}
    >
      {/* Category header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        marginBottom: '1rem',
        paddingBottom: '0.75rem',
        borderBottom: `1px solid rgba(255,255,255,0.04)`
      }}>
        <motion.div
          whileHover={{ rotate: 12, scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 400 }}
          style={{
            width: '30px', height: '30px', borderRadius: '6px',
            border: `1px solid ${accent}25`,
            background: `${accent}0f`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
          }}
        >
          <IconComponent size={14} color={accent} />
        </motion.div>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0' }}>
          {category.name}
        </span>
      </div>

      {/* Skill items with stagger */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {category.items.map((item, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 + j * 0.04, duration: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '2px 0' }}
          >
            <motion.span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.6rem', color: accent, flexShrink: 0
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5 + j * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            >
              ●
            </motion.span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const SkillsSection = () => {
  return (
    <section id="skills" style={{ padding: '80px 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-label">// skills</span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700, color: '#e2e8f0',
            letterSpacing: '-0.02em', marginTop: '0.5rem'
          }}>Technical Skills</h2>
          <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Spanning infrastructure, DevOps, databases, networking, and embedded systems
          </p>
        </motion.div>

        {/* Stagger grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem'
          }}
        >
          {skills.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="card-tech"
          style={{ padding: '1.25rem 1.5rem', marginTop: '1rem' }}
        >
          <span className="section-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
            // languages
          </span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Indonesian', level: 'Native', color: '#00d68f' },
              { name: 'English', level: 'Professional Working Proficiency', color: '#3b7cf7' },
            ].map((lang, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'default' }}
              >
                <motion.span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem', color: lang.color
                  }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                >
                  ●
                </motion.span>
                <span style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 500 }}>{lang.name}</span>
                <span style={{ fontSize: '0.78rem', color: '#475569' }}>{lang.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
