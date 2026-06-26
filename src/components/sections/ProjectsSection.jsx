/**
 * Tujuan: Projects section — showcase real GitHub projects
 * Caller: App.jsx → Projects.jsx → ProjectsSection.jsx
 * Dependensi: framer-motion, lucide-react, data/projects.js
 * Main Functions: ProjectsSection
 * Side Effects: None
 * Last Updated: 2026-06-26 (redesign tech theme)
 */

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import projects from '../../data/projects.js';

const statusColor = {
  Active: '#00d68f',
  Completed: '#3b7cf7',
  Development: '#f59e0b',
};

const langColor = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  PHP: '#777bb4',
};

const ProjectsSection = () => {
  return (
    <section id="projects" style={{ padding: '80px 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-label">// projects</span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: '#e2e8f0',
            letterSpacing: '-0.02em',
            marginTop: '0.5rem'
          }}>Projects</h2>
          <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Real repositories — web apps, APIs, and system tools
          </p>
        </motion.div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem'
        }}>
          {projects.map((project, index) => {
            const status = project.status || 'Active';
            const statusClr = statusColor[status] || '#00d68f';
            const langClr = langColor[project.language] || '#94a3b8';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="card-tech"
                style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '32px', height: '32px',
                    border: '1px solid rgba(0, 214, 143, 0.15)',
                    borderRadius: '6px',
                    background: 'rgba(0, 214, 143, 0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Code size={14} color="#00d68f" />
                  </div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem', padding: '2px 7px',
                    background: `${statusClr}12`,
                    color: statusClr, borderRadius: '4px',
                    border: `1px solid ${statusClr}25`
                  }}>{status}</span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, flex: 1 }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {project.techStack.slice(0, 3).map((tech, j) => (
                    <span key={j} className="skill-tag">{tech}</span>
                  ))}
                </div>

                {/* Footer */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255,255,255,0.04)'
                }}>
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem'
                  }}>
                    <span style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: langClr, display: 'inline-block'
                    }} />
                    <span style={{ color: '#475569' }}>{project.language}</span>
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#00d68f'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                  >
                    <Github size={13} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem' }}>
                      View
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
