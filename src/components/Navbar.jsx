/**
 * Tujuan: Navigation bar — fixed, scroll-aware, tech-themed
 * Caller: App.jsx
 * Dependensi: framer-motion, react-router-dom
 * Main Functions: Navbar
 * Side Effects: window scroll event listener
 * Last Updated: 2026-06-26 (redesign tech theme)
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['hero', ...navItems.map(i => i.id)];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled
            ? 'rgba(8, 13, 24, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(0, 214, 143, 0.1)'
            : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>

            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleClick(e, 'hero')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <div style={{
                width: '28px', height: '28px',
                border: '1px solid rgba(0, 214, 143, 0.4)',
                borderRadius: '4px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Terminal size={14} color="#00d68f" />
              </div>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#00d68f',
                letterSpacing: '0.05em'
              }}>
                izzudin<span style={{ color: '#475569' }}>@alqa</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', gap: '0', alignItems: 'center' }} className="hidden md:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: activeSection === item.id ? '#00d68f' : '#94a3b8',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { if (activeSection !== item.id) e.target.style.color = '#e2e8f0'; }}
                  onMouseLeave={e => { if (activeSection !== item.id) e.target.style.color = '#94a3b8'; }}
                >
                  {activeSection === item.id && (
                    <span style={{
                      position: 'absolute', left: '4px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem', color: '#00d68f', opacity: 0.7
                    }}>›</span>
                  )}
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              background: 'rgba(8, 13, 24, 0.97)',
              borderBottom: '1px solid rgba(0, 214, 143, 0.1)',
              padding: '1rem 1.5rem',
              zIndex: 49,
              backdropFilter: 'blur(12px)',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                style={{
                  display: 'block',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  color: activeSection === item.id ? '#00d68f' : '#94a3b8',
                  padding: '10px 0',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                {activeSection === item.id ? '› ' : '  '}{item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}