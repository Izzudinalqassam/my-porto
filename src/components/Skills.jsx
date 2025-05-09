// Skills.jsx
import { motion } from 'framer-motion'

// Data skills
const skills = [
  {
    id: 1,
    name: "Core Technical Skills",
    items: [
      "network administrator",
      "web development",
      "system administrator",
      "IT support",
      "server administrator"
    ],
    icon: "💻"
  },
  {
    id: 2,
    name: "Development Tools",
    items: [
      "Git",
      "VS Code",
      "Docker",
      "Linux",
      "Dbeaver",
      "Postman",
      "Laragon"
    ],
    icon: "🛠️"
  },
  {
    id: 3,
    name: "Soft Skills",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
      "Continuous Learning",
      "Communication",
      "Adaptability",
      "Critical Thinking"
    ],
    icon: "🎯"
  },
  {
    id: 4,
    name: "Currently Learning",
    items: [
      "Next.js",
      "Tailwind CSS",
      "AWS Cloud Services",
      "Kubernetes",
      "Golang",
      "Kubernetes",
      "web3",
    ],
    icon: "📚"
  }
]

// Particle Background Component
const SkillBackground = () => {
  const particles = Array(10).fill(0).map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 5 + 2,
    color: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 0.2)`
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{ x: particle.x, y: particle.y }}
          animate={{
            x: [particle.x, particle.x + 100, particle.x],
            y: [particle.y, particle.y + 100, particle.y],
            transition: {
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            filter: 'blur(5px)'
          }}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 w-full px-4 max-w-4xl mx-auto relative overflow-hidden">
      {/* Particle Background */}
      <SkillBackground />
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-white text-center"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Technical & Soft Skills
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * category.id }}
            className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            {/* Icon Background */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-cyan-400 text-3xl">
              {category.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-4 relative pl-16">
              {category.name}
            </h3>

            <div className="space-y-3 relative pl-16">
              {category.items.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center text-gray-300"
                >
                  <div className="w-4 h-4 mr-2 relative">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="absolute inset-0 rounded-full bg-cyan-400/20"
                    />
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}