/**
 * Tujuan: About section — professional summary dan core competencies
 * Caller: App.jsx → about.jsx → AboutSection.jsx
 * Dependensi: framer-motion, lucide-react
 * Main Functions: AboutSection
 * Side Effects: None
 * Last Updated: 2026-06-26 (redesign tech theme + update konten dari CV)
 */

import { motion } from 'framer-motion';
import { Server, Cloud, Shield, Code, Database, Activity, CheckCircle2, Award } from 'lucide-react';

const competencies = [
  {
    icon: Server,
    title: 'Infrastructure & DevOps',
    items: ['Linux (Ubuntu, RHEL)', 'Docker & Compose', 'Ansible Automation', 'CI/CD Pipelines'],
    accent: '#00d68f'
  },
  {
    icon: Activity,
    title: 'Monitoring & Observability',
    items: ['Prometheus', 'Grafana', 'SigNoz', 'Log & RCA Analysis'],
    accent: '#3b7cf7'
  },
  {
    icon: Shield,
    title: 'Security & Operations',
    items: ['IBM QRadar', 'Firewall Config', 'System Hardening', 'Incident Response'],
    accent: '#7c3aed'
  },
  {
    icon: Code,
    title: 'Development & Database',
    items: ['PHP, Python, JS', 'PostgreSQL, MySQL', 'REST APIs', 'IoT & ESP8266'],
    accent: '#f59e0b'
  },
];

const achievements = [
  { metric: '99.9%', label: 'System uptime maintained', icon: Award },
  { metric: '70%', label: 'Reduction in manual config time', icon: CheckCircle2 },
  { metric: '100+', label: 'Production servers managed', icon: Server },
  { metric: '60%', label: 'Faster incident response', icon: Activity },
];

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
            fontWeight: 700,
            color: '#e2e8f0',
            letterSpacing: '-0.02em',
            marginTop: '0.5rem'
          }}>Professional Profile</h2>
        </motion.div>

        {/* Summary + Achievements */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '3rem' }}>
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-tech"
            style={{ padding: '1.75rem' }}
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

            {/* Achievement metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem'
            }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                  style={{
                    padding: '1rem',
                    background: 'rgba(0, 214, 143, 0.04)',
                    borderRadius: '6px',
                    border: '1px solid rgba(0, 214, 143, 0.1)',
                  }}
                >
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1.5rem', fontWeight: 700, color: '#00d68f',
                    marginBottom: '4px'
                  }}>{a.metric}</div>
                  <div style={{ fontSize: '0.75rem', color: '#475569' }}>{a.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: '1rem' }}
        >
          <span className="section-label" style={{ marginBottom: '1.5rem', display: 'block' }}>
            // core_competencies
          </span>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem'
        }}>
          {competencies.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="card-tech"
              style={{ padding: '1.25rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <div style={{
                  width: '32px', height: '32px',
                  border: `1px solid ${comp.accent}30`,
                  borderRadius: '6px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${comp.accent}10`
                }}>
                  <comp.icon size={16} color={comp.accent} />
                </div>
                <h3 style={{
                  fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0'
                }}>{comp.title}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {comp.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem', color: comp.accent
                    }}>›</span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-tech"
          style={{ padding: '1.5rem', marginTop: '1.5rem' }}
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
              <div key={i} style={{
                padding: '8px 14px',
                background: 'rgba(59, 124, 247, 0.07)',
                border: '1px solid rgba(59, 124, 247, 0.15)',
                borderRadius: '6px',
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>{cert.name}</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem', color: '#60a5fa'
                }}>{cert.issuer} · {cert.year}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
