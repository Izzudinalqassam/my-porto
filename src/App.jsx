// App.jsx
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Experience from './components/experiences'
import Education from './components/education'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/about'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} overflow-hidden`} style={{
      scrollbarWidth: 'none',
      '-ms-overflow-style': 'none'
    }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="overflow-hidden w-full" style={{
        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none'
      }}>
        <Hero />  
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}