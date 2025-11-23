// experiences.jsx
import { motion } from 'framer-motion'
import { Rocket, Wrench, Code, GraduationCap, Shield, Monitor, MapPin, CheckSquare } from 'lucide-react'
import experiences from '../data/experiences.js'

const iconMap = {
  Rocket,
  Wrench,
  Code,
  GraduationCap,
  Shield,
  Monitor
}

const RoadmapItem = ({ experience, isLast }) => {
  const levelColors = {
    Internship: {
      bg: "from-cyan-400 to-blue-700",
      hover: "hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg"
    },
    Staff: {
      bg: "from-cyan-400 to-blue-700",
      hover: "hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg"
    },
    "Study Independent": {
      bg: "from-cyan-400 to-blue-700",
      hover: "hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg"
    }
  }

  const IconComponent = iconMap[experience.icon] || Code

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * experience.id }}
      className="flex relative pb-12"
    >
      {!isLast && (
        <div className={`h-full w-0.5 absolute left-5 top-10 bg-gradient-to-b ${levelColors[experience.level].bg}`} />
      )}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${levelColors[experience.level].bg} flex items-center justify-center text-white z-10`}>
        <IconComponent size={20} />
      </div>
      <div className="flex-grow pl-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`bg-gray-800/80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm transition-all duration-300 ${levelColors[experience.level].hover}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold text-white"
              >
                {experience.title}
              </motion.h3>
              <p className="text-gray-400">{experience.company}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${levelColors[experience.level].bg} text-white`}>
              {experience.level}
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">{experience.period}</p>
          {experience.location && (
            <p className="text-gray-400 text-sm flex items-center">
              <MapPin size={14} className="mr-1" />
              {experience.location}
            </p>
          )}
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {experience.skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs rounded-full bg-gray-900 text-gray-200 border border-gray-700"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {experience.achievements && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 space-y-2"
            >
              {experience.achievements.map((achievement, index) => (
                <motion.p
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-300 text-sm flex items-start"
                >
                  <CheckSquare size={16} className="mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
                  {achievement}
                </motion.p>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative -mt-20 pt-20 pb-20 w-full px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-white text-center"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Professional Experience
        </span>
      </motion.h2>

      <div className="relative">
        <div className="absolute h-full w-0.5 bg-gray-700 left-5 top-0 hidden md:block" />
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <RoadmapItem
              key={exp.id}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
