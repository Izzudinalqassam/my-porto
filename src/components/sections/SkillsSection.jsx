/**
 * Tujuan: Skills section — technical skills showcase dengan kategori
 * Caller: App.jsx → Skills.jsx → SkillsSection.jsx
 * Dependensi: framer-motion, lucide-react, data/skills.js
 * Main Functions: SkillsSection
 * Side Effects: None
 * Last Updated: 2026-06-26 (redesign tech theme)
 */

import { motion } from 'framer-motion';
import {
  Server, GitBranch, Activity, Database, Code2,
  Cloud, Shield, Cpu, Languages
} from 'lucide-react';
import skills from '../../data/skills.js';

const iconMap = {
  Server, GitBranch, Activity, Database, Code2, Cloud, Shield, Cpu, Languages
};

const accentColors = [
  '#00d68f', '#3b7cf7', '#60a5fa', '#7c3aed',
  '#f59e0b', '#38bdf8', '#f43f5e', '#84cc16'
];

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
            fontWeight: 700,
            color: '#e2e8f0',
            letterSpacing: '-0.02em',
            marginTop: '0.5rem'
          }}>Technical Skills</h2>
          <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Spanning infrastructure, DevOps, databases, networking, and embedded systems
          </p>
        </motion.div>

        {/* Skills grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1rem'
        }}>
          {skills.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code2;
            const accent = accentColors[index % accentColors.length];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="card-tech"
                style={{ padding: '1.25rem' }}
              >
                {/* Category header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  marginBottom: '1rem',
                  paddingBottom: '0.75rem',
                  borderBottom: `1px solid rgba(255,255,255,0.04)`
                }}>
                  <div style={{
                    width: '30px', height: '30px',
                    borderRadius: '6px',
                    border: `1px solid ${accent}25`,
                    background: `${accent}0f`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <IconComponent size={14} color={accent} />
                  </div>
                  <span style={{
                    fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0'
                  }}>{category.name}</span>
                </div>

                {/* Skill items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {category.items.map((item, j) => (
                    <div key={j} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '3px 0',
                    }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.6rem', color: accent, flexShrink: 0,
                        lineHeight: 1
                      }}>●</span>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem', color: '#00d68f'
              }}>●</span>
              <span style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 500 }}>Indonesian</span>
              <span style={{ fontSize: '0.78rem', color: '#475569' }}>Native</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem', color: '#3b7cf7'
              }}>●</span>
              <span style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 500 }}>English</span>
              <span style={{ fontSize: '0.78rem', color: '#475569' }}>Professional Working Proficiency</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
