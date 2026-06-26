/**
 * Tujuan: Hero section — clean tech-themed landing dengan terminal aesthetic + animations
 * Caller: App.jsx → Hero.jsx → HeroSection.jsx
 * Dependensi: framer-motion, lucide-react, hooks/useAnimations
 * Main Functions: HeroSection
 * Side Effects: None
 * Last Updated: 2026-06-26 (added typewriter, count-up, scan line, orbit blobs)
 */

import { motion } from 'framer-motion';
import { Mail, Download, Github, Linkedin, MapPin, ChevronDown } from 'lucide-react';
import { useTypewriter, useCountUp } from '../../hooks/useAnimations';

/* ---- Animated ambient blobs (CSS-only, GPU) ---- */
const AmbientBlobs = () => (
  <>
    {/* Top-left emerald glow */}
    <div className="anim-float-slow" style={{
      position: 'absolute', top: '10%', left: '-8%',
      width: '420px', height: '420px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,214,143,0.07) 0%, transparent 70%)',
      pointerEvents: 'none', zIndex: 0
    }} />
    {/* Bottom-right blue glow */}
    <div className="anim-float" style={{
      position: 'absolute', bottom: '5%', right: '-5%',
      width: '360px', height: '360px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(59,124,247,0.06) 0%, transparent 70%)',
      pointerEvents: 'none', zIndex: 0,
      animationDelay: '-2s'
    }} />
    {/* Center subtle grid highlight */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      backgroundImage: `
        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0, 214, 143, 0.06) 0%, transparent 70%),
        radial-gradient(ellipse 40% 30% at 80% 20%, rgba(59, 124, 247, 0.05) 0%, transparent 60%)
      `,
      pointerEvents: 'none', zIndex: 0
    }} />
  </>
);

/* ---- Animated stat box with count-up ---- */
function StatBox({ value, label, target, suffix = '' }) {
  const { count, ref } = useCountUp(target, 1200);
  const displayValue = target ? `${count}${suffix}` : value;

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        padding: '12px 16px',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '6px',
        background: 'rgba(17, 27, 46, 0.6)',
        backdropFilter: 'blur(4px)',
        cursor: 'default',
      }}
    >
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '1.5rem', fontWeight: 700, color: '#00d68f',
        letterSpacing: '-0.02em'
      }}>
        {displayValue}
      </div>
      <div style={{
        fontSize: '0.7rem', color: '#475569',
        fontFamily: "'JetBrains Mono', monospace",
        textTransform: 'uppercase', letterSpacing: '0.1em',
        marginTop: '2px'
      }}>
        {label}
      </div>
    </motion.div>
  );
}

/* ---- Floating tech badge (decorative) ---- */
function FloatingBadge({ text, style }) {
  return (
    <motion.div
      className="anim-float"
      animate={{ rotate: [0, 1, -1, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem', fontWeight: 600,
        padding: '4px 10px',
        background: 'rgba(14, 22, 40, 0.85)',
        border: '1px solid rgba(0, 214, 143, 0.2)',
        borderRadius: '4px',
        color: '#00d68f',
        backdropFilter: 'blur(8px)',
        pointerEvents: 'none',
        zIndex: 1,
        ...style
      }}
    >
      {text}
    </motion.div>
  );
}

const HeroSection = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const roleText = useTypewriter([
    'TechOps Engineer',
    'DevOps Enthusiast',
    'System Administrator',
    'Infrastructure Automation',
    'Linux & Docker Expert',
  ], 65);

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
      {/* CSS-only animated background */}
      <AmbientBlobs />

      {/* Scan line sweep */}
      <div className="scan-line" />

      {/* Floating decorative tech badges — desktop only */}
      <FloatingBadge text="$ ansible-playbook deploy.yml" style={{
        top: '22%', right: '5%', display: 'none',
        // We show via media query workaround via inline hidden on mobile
      }} />
      <FloatingBadge text="● 100+ servers ONLINE" style={{
        bottom: '28%', right: '4%',
        animationDelay: '-1.5s',
      }} />
      <FloatingBadge text="docker ps --all ✓" style={{
        top: '35%', left: '2%',
        animationDelay: '-3s',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%', margin: '0 auto' }}>

        {/* Terminal prompt */}
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
            <span className="cursor-blink">_</span>
          </span>
        </motion.div>

        {/* Name — shimmer on load */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '0.75rem',
          }}
        >
          <span className="anim-shimmer">Izzudin Alqassam</span>
        </motion.h1>

        {/* Typewriter role — fixed height to prevent layout shift */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            fontWeight: 500,
            color: '#00d68f',
            marginBottom: '1.5rem',
            minHeight: '1.8rem',
            display: 'flex', alignItems: 'center', gap: '4px'
          }}
        >
          <span style={{ color: '#475569' }}>{'>'}</span>
          <span>{roleText}</span>
          <span className="cursor-blink" style={{ marginLeft: '1px' }}>▌</span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: 'flex', gap: '12px', marginBottom: '2.5rem', flexWrap: 'wrap'
          }}
        >
          <StatBox target={100} suffix="+" label="Servers Managed" />
          <StatBox target={50} suffix="+" label="Docker Services" />
          <StatBox value="4.00" label="GPA / 4.00" />
          <StatBox target={3} suffix="+" label="Years Exp" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}
            className="btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={14} /> Hire Me
          </motion.a>
          <motion.a
            href="/my-porto/resumes/GENERAL_CV_ALQA.pdf"
            download
            className="btn-secondary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={14} /> Resume
          </motion.a>
          <motion.a
            href="https://github.com/Izzudinalqassam"
            target="_blank" rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={14} /> GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/izzudinalqassam"
            target="_blank" rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Linkedin size={14} /> LinkedIn
          </motion.a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
        transition={{ duration: 1, delay: 2 }}
        onClick={() => handleScroll('about')}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: '#475569', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'
        }}
      >
        <motion.span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem', color: '#2d3748',
            letterSpacing: '0.1em'
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          scroll
        </motion.span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
