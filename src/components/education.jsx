// education.jsx
import { motion } from 'framer-motion'

const education = [
  {
    id: 1,
    degree: "Bachelor of Information Technology",
    institution: "Universitas BSI",
    period: "2021 - 2025",
    gpa: "4.00/4.00",
    coursework: ["Web Development", "Database Systems", "Network Security", "AI & Machine Learning"],
    highlights: ["MSIB Batch 5 & MSIB Batch 7","Certified in Network Administrator", "Certified in Software Development"]
  },
  {
    id: 2,
    degree: "High School",
    institution: "SMK Bintang Harapan",
    period: "2018 - 2021",
    gpa: "82/100",
    coursework: ["Web Development", "Database Systems", "Network Administrator","Hardware & Network Troubleshooting"],
  }
  
]

const EducationItem = ({ education, isLast }) => {
  const levelColors = {
    "Bachelor": {
      bg: "from-cyan-400 to-blue-500",
      hover: "hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg"
    },
    "High": {
      bg: "from-cyan-400 to-blue-500",
      hover: "hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg"
    },
    default: {
      bg: "from-gray-400 to-gray-600",
      hover: "hover:border-gray-400 hover:shadow-gray-500/20 hover:shadow-lg"
    }
  }

  const getColor = (degree) => {
    const key = degree.split(' ')[0]
    return levelColors[key] || levelColors.default
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * education.id }}
      className="flex relative pb-12"
    >
      {!isLast && (
        <div className={`h-full w-0.5 absolute left-5 top-10 bg-gradient-to-b ${getColor(education.degree).bg}`} />
      )}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${getColor(education.degree).bg} flex items-center justify-center text-white z-10`}>
        {education.degree.includes("Bachelor") ? "  🎓" : "🎓"}
      </div>
      <div className="flex-grow pl-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`bg-gray-800/80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm transition-all duration-300 ${getColor(education.degree).hover}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold text-white"
              >
                {education.degree}
              </motion.h3>
              <p className="text-gray-400">{education.institution}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getColor(education.degree).bg} text-white`}>
              {education.period}
            </span>
          </div>
          {education.gpa && (
            <p className="text-gray-400 text-sm mt-1">GPA: {education.gpa}</p>
          )}
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {education.coursework?.map((course, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs rounded-full bg-gray-900 text-gray-200 border border-gray-700"
              >
                {course}
              </motion.span>
            ))}
          </motion.div>

          {education.highlights?.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 space-y-2"
            >
              {education.highlights.map((highlight, index) => (
                <motion.p
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-400 text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  {highlight}
                </motion.p>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-20 w-full px-4 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-white text-center"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Educational Background
        </span>
      </motion.h2>

      <div className="relative">
        <div className="absolute h-full w-0.5 bg-gray-700 left-5 top-0 hidden md:block" />
        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationItem
              key={edu.id}
              education={edu}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}