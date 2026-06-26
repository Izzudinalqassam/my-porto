/**
 * Tujuan: Hero section — clean tech-themed landing dengan terminal aesthetic
 * Caller: App.jsx → Hero.jsx → HeroSection.jsx
 * Dependensi: framer-motion, lucide-react
 * Main Functions: HeroSection
 * Side Effects: None
 * Last Updated: 2026-06-26 (redesign — simplified tech theme)
 */

import { motion } from 'framer-motion';
import { Mail, Download, Github, Linkedin, MapPin, ChevronDown } from 'lucide-react';

// Dot grid background — simple CSS, no canvas overhead
const GridBackground = () => (
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: `
      radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0, 214, 143, 0.08) 0%, transparent 70%),
      radial-gradient(ellipse 40% 30% at 80% 20%, rgba(59, 124, 247, 0.06) 0%, transparent 60%)
    `,
    pointerEvents: 'none'
  }} />
);

const HeroSection = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 1.5rem 60px',
      overflow: 'hidden'
    }}>
      <GridBackground />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%', margin: '0 auto' }}>

        {/* Terminal prompt label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem',
            color: '#00d68f',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <span style={{ color: '#475569' }}>~/portfolio</span>
            <span style={{ color: '#e2e8f0' }}>$</span>
            <span>whoami</span>
            <span style={{ animation: 'blink 1.2s step-end infinite', color: '#00d68f' }}>_</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            color: '#e2e8f0',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem'
          }}
        >
          Izzudin Alqassam
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 500,
            color: '#00d68f',
            marginBottom: '1.5rem'
          }}
        >
          TechOps Engineer · DevOps · System Administrator
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: '1rem',
            color: '#94a3b8',
            lineHeight: 1.75,
            maxWidth: '640px',
            marginBottom: '2rem'
          }}
        >
          Fresh graduated IT Professional with nearly 3 years of experience in
          Linux server management, Docker automation, and infrastructure monitoring.
          Currently managing 100+ production servers at Nodeflux.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'flex', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap'
          }}
        >
          {[
            { value: '100+', label: 'Servers Managed' },
            { value: '50+', label: 'Docker Services' },
            { value: '4.00', label: 'GPA / 4.00' },
            { value: '3+', label: 'Years Exp' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1.4rem', fontWeight: 700, color: '#e2e8f0'
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.75rem', color: '#475569',
                fontFamily: "'JetBrains Mono', monospace",
                textTransform: 'uppercase', letterSpacing: '0.08em'
              }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}
            className="btn-primary">
            <Mail size={14} /> Hire Me
          </a>
          <a href="/my-porto/resumes/GENERAL_CV_ALQA.pdf" download className="btn-secondary">
            <Download size={14} /> Resume
          </a>
          <a href="https://github.com/Izzudinalqassam" target="_blank" rel="noopener noreferrer"
            className="btn-secondary">
            <Github size={14} /> GitHub
          </a>
          <a href="https://linkedin.com/in/izzudinalqassam" target="_blank" rel="noopener noreferrer"
            className="btn-secondary">
            <Linkedin size={14} /> LinkedIn
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <MapPin size={13} color="#475569" />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem', color: '#475569'
          }}>South Jakarta, Indonesia · Open to remote/hybrid</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => handleScroll('about')}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: '#475569', zIndex: 2
        }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
