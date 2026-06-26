/**
 * Tujuan: Articles preview section — recent articles cards
 * Caller: App.jsx
 * Dependensi: framer-motion, react-router-dom, utils/articles
 * Main Functions: Articles
 * Side Effects: None
 * Last Updated: 2026-06-26 (redesign tech theme)
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { getAllArticles } from '../utils/articles';

const recentArticles = getAllArticles().slice(0, 3);

export default function Articles() {
  return (
    <section id="articles" style={{ padding: '80px 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <span className="section-label">// articles</span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              color: '#e2e8f0',
              letterSpacing: '-0.02em',
              marginTop: '0.5rem'
            }}>Latest Articles</h2>
          </div>
          <Link
            to="/articles"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.78rem', color: '#00d68f', textDecoration: 'none'
            }}
          >
            View all <ArrowRight size={13} />
          </Link>
        </motion.div>

        {/* Articles grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem'
        }}>
          {recentArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-tech"
              style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              {/* Meta */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem', color: '#475569'
                }}>{article.date}</span>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem', color: '#475569'
                }}>
                  <Clock size={10} /> {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0', lineHeight: 1.4
              }}>{article.title}</h3>

              {/* Excerpt */}
              <p style={{
                fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6, flex: 1
              }}>{article.excerpt}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {article.tags.map((tag, j) => (
                  <span key={j} className="skill-tag">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
