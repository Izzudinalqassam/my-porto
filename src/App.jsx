// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Experience from './components/experiences';
import Education from './components/education';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/about';
import Articles from './components/Articles';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetail from './pages/ArticleDetail';

function Portfolio() {
  const [darkMode] = useState(true);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} overflow-hidden`} style={{
      scrollbarWidth: 'none',
      'msOverflowStyle': 'none'
    }}>
      <Navbar />
      <main className="overflow-hidden w-full" style={{
        scrollbarWidth: 'none',
        'msOverflowStyle': 'none'
      }}>
        <Hero />  
        <About />
        <Experience />
        <Education />
        <Projects />
        <Articles />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default function App() {
  // Use the basename prop to handle the /my-porto base URL
  return (
    <Router basename="/my-porto">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}