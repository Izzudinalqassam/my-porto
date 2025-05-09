// experiences.jsx
import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: "Information Technology Operation Engineer",
    company: "Nodeflux Teknologi Indonesia",
    period: "2025 - Present",
    skills: ["Docker", "Kubernetes", "Linux", "Bash", "Grafana", "Windows Subsystem for Linux", "PostgreSQL"],
    icon: "💻",
    level: "Staff"
  },
  {
    id: 2,
    title: "Programmer Internship",
    company: "PT Jababeka TBK",
    period: "Sep 2024 - Jan 2025",
    skills: ["Web Development", "IoT", "RESTful APIs", "Database Optimization"],
    icon: "💻",
    level: "Internship"
  },
  {
    id: 3,
    title: "Technical Support Assistant",
    company: "Universitas BSI",
    period: "May 2024 - Sep 2024",
    skills: ["IT Support", "Network Maintenance", "Hardware Troubleshooting"],
    icon: "🛠️",
    level: "Internship"
  },
  {
    id: 4,
    title: "IT Support Staff",
    company: "PT Akira Data Pratama",
    period: "Aug 2023 - Jan 2024",
    skills: ["System Administration", "Software Installation", "Network Config"],
    icon: "🔧",
    level: "Staff"
  },
  {
    id: 5,
    title: "IBM AI & System Administrator",
    company: "Infinite Learning",
    period: "Aug 2023 - Jan 2024",
    skills: ["IBM Cloud", "Linux Admin", "AI Modeling", "Watson Tools"],
    icon: "🤖",
    level: "Course"
  },
  {
    id: 6,
    title: "IT Support Staff Internship",
    company: "PT Prima Unggul Persada",
    period: "May 2023 - Aug 2023",
    skills: ["PC Troubleshooting", "Network Administration", "Database Management", "Firewall Configuration"],
    icon: "💻",
    level: "Internship"
  }
  
]

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
    Course: {
      bg: "from-cyan-400 to-blue-700",
      hover: "hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg"
    }
  }

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
        {experience.icon}
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
          Experience's Roadmap
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