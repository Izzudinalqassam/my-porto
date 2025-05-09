// Hero.jsx
import { motion } from 'framer-motion'
import { useRef, useEffect, useMemo } from 'react'
import profilePicture from '../assets/profile-pictures/alqa.jpeg'

// Particle Background
const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const particleCount = 100
  const gridSize = 50

  const particles = useMemo(() => 
    Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: `rgba(100, 210, 255, ${Math.random() * 0.5 + 0.1})`
    }))
  , [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drawParticle = (particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()
    }

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width) particle.x = 0
        if (particle.y > canvas.height) particle.y = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y < 0) particle.y = canvas.height

        drawParticle(particle)
      })
      requestAnimationFrame(updateParticles)
    }

    updateParticles()

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [particles])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}

// Avatar dengan efek floating
const FloatingAvatar = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5
        }
      }}
      className="relative w-40 h-40 mx-auto mb-8"
    >
      <img 
          src={profilePicture}
          alt="Izzudin Alqassam"
          className="w-full h-full rounded-full border-4 border-cyan-400 bg-gray-700 object-cover"
          aria-label="Profile picture of Izzudin Alqassam"
        />
    </motion.div>
  )
}

// Hero component
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50" />

      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <FloatingAvatar />

        {/* Name with Gradient Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Izzudin Alqassam
          </span>
        </motion.h1>

        {/* Role with Typing Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 "
        >
          <span className="inline-block">
            #INTECHWETRUST
            <br />
            #VIVATECHNOLOGY
                       
          </span>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          Passionate about building scalable web applications and exploring the Technology world.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 mb-12"
        >
          <a 
            href="https://github.com/izzudinalqassam"  
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C21.14 22.18 24 16.42 24 12A10 10 0 0012 2z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/izzudinalqassam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-4"
        >
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
          >            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        Get in Touch
      </a>
    </motion.div>
  </div>
</section>
)
}