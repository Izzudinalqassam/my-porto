/**
 * Tujuan: About section — professional summary dan core competencies + 3D tilt + counter animations
 * Caller: App.jsx → about.jsx → AboutSection.jsx
 * Dependensi: framer-motion, lucide-react, hooks/useAnimations
 * Main Functions: AboutSection
 * Side Effects: DOM mousemove listeners per card
 * Last Updated: 2026-06-26 (added 3D tilt on competency cards, counter metrics, stagger)
 */

import { motion } from 'framer-motion';
import { Server, Cloud, Shield, Code, Activity, Award, CheckCircle2 } from 'lucide-react';
import { useTilt, useCountUp } from '../../hooks/useAnimations';

const competencies = [
  {
    icon: Server, title: 'Infrastructure & DevOps',
    items: ['Linux (Ubuntu, RHEL)', 'Docker & Compose', 'Ansible Automation', 'CI/CD Pipelines'],
    accent: '#00d68f'
  },
  {
    icon: Activity, title: 'Monitoring & Observability',
    items: ['Prometheus', 'Grafana', 'SigNoz', 'Log & RCA Analysis'],
    accent: '#3b7cf7'
  },
  {
    icon: Shield, title: 'Security & Operations',
    items: ['IBM QRadar', 'Firewall Config', 'System Hardening', 'Incident Response'],
    accent: '#7c3aed'
  },
  {
    icon: Code, title: 'Development & Database',
    items: ['PHP, Python, JS', 'PostgreSQL, MySQL', 'REST APIs', 'IoT & ESP8266'],
    accent: '#f59e0b'
  },
];

/* Metric card with count-up */
function MetricCard({ metric, label, target, suffix = '' }) {
  const { count, ref } = useCountUp(target, 1000);
  const displayValue = target ? `${count}${suffix}` : metric;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        padding: '1rem',
        background: 'rgba(0, 214, 143, 0.04)',
        borderRadius: '6px',
        border: '1px solid rgba(0, 214, 143, 0.1)',
        cursor: 'default',
      }}
    >
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '1.5rem', fontWeight: 700, color: '#00d68f',
        marginBottom: '4px'
      }}>{displayValue}</div>
      <div style={{ fontSize: '0.75rem', color: '#475569' }}>{label}</div>
    </motion.div>
  );
}

/* Competency card with 3D tilt */
function CompetencyCard({ comp, index }) {
  const { tiltRef, style, handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.09 }}
      ref={tiltRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-tech card-glow-border card-3d"
      style={{ padding: '1.25rem', ...style }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
        <motion.div
          whileHover={{ rotate: 15, scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 400 }}
          style={{
            width: '32px', height: '32px',
            border: `1px solid ${comp.accent}30`,
            borderRadius: '6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `${comp.accent}10`
          }}
        >
          <comp.icon size={16} color={comp.accent} />
        </motion.div>
        <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0' }}>{comp.title}</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {comp.items.map((item, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + j * 0.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem', color: comp.accent
            }}>›</span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const AboutSection = () => {
  return (
    <section id="about" style={{ padding: '80px 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-label">// about</span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700, color: '#e2e8f0',
            letterSpacing: '-0.02em', marginTop: '0.5rem'
          }}>Professional Profile</h2>
        </motion.div>

        {/* Summary + Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-tech"
          style={{ padding: '1.75rem', marginBottom: '1.5rem' }}
        >
          <p style={{
            fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.5rem'
          }}>
            Fresh graduated IT Professional with nearly 3 years of experience across software development,
            system administration, technical operations, and IT support. Skilled in Linux and Windows
            administration, web application development, database management, application deployment,
            troubleshooting, and production support. Hands-on experience with Docker, PostgreSQL, MySQL,
            networking, and IoT-based systems.
          </p>

          {/* Animated metric grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem'
          }}>
            <MetricCard target={99} suffix=".9%" label="System uptime maintained" />
            <MetricCard target={70} suffix="%" label="Reduction in manual config time" />
            <MetricCard target={100} suffix="+" label="Production servers managed" />
            <MetricCard target={60} suffix="%" label="Faster incident response" />
          </div>
        </motion.div>

        {/* Core Competencies label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ marginBottom: '1rem' }}
        >
          <span className="section-label">// core_competencies</span>
        </motion.div>

        {/* 3D tilt competency cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem', marginBottom: '1.5rem'
        }}>
          {competencies.map((comp, i) => (
            <CompetencyCard key={i} comp={comp} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="card-tech"
          style={{ padding: '1.5rem' }}
        >
          <span className="section-label" style={{ marginBottom: '1rem', display: 'block' }}>
            // certifications
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { name: 'Network Administrator Madya', issuer: 'BNSP', year: '2023–2028' },
              { name: 'Pengembang Perangkat Lunak', issuer: 'BNSP', year: '2024–2029' },
              { name: 'PCAP — Python Essentials', issuer: 'Cisco', year: '2024' },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.04, y: -2 }}
                style={{
                  padding: '8px 14px',
                  background: 'rgba(59, 124, 247, 0.07)',
                  border: '1px solid rgba(59, 124, 247, 0.15)',
                  borderRadius: '6px', cursor: 'default'
                }}
              >
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>{cert.name}</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem', color: '#60a5fa'
                }}>{cert.issuer} · {cert.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
