// about.jsx
import { motion } from 'framer-motion';

// Data untuk Tech Stack
const techStack = [
  {
    id: 'tools',
    title: 'Tools',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'Docker', 'Grafana', 'Postman']
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '💻',
    items: ['React.js', 'Tailwind', 'HTML5']
  },
  {
    id: 'database',
    title: 'Database',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    items: ['MySQL', 'PostgreSQL', 'Oracle']
  }
];

// Data untuk Strengths
const strengths = [
  {
    id: 'problem-solving',
    title: 'Problem Solver',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Experienced in troubleshooting and resolving complex technical issues'
  },
  {
    id: 'system-admin',
    title: 'System Administrator',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Expert in system configuration, maintenance, and security'
  }
];

// Data untuk Achievements
const achievements = [
  {
    id: 'system-admin',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'System Administration',
    description: 'Implemented and maintained system infrastructure for multiple companies, achieving 99.9% uptime'
  },
  {
    id: 'technical-support',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Technical Support Excellence',
    description: 'Provided exceptional IT support with a 98% customer satisfaction rate across multiple internships'
  },
  {
    id: 'ibm-certification',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'IBM AI & System Admin Certification',
    description: 'Completed IBM AI & System Administrator course with hands-on experience in cloud computing and AI tools'
  }
];

const strengthSizes = {
  'problem-solving': 'w-14 h-14',
  'system-admin': 'w-12 h-12',
  'network-admin': 'w-10 h-10',
  'technical-support': 'w-12 h-12',
  'ibm-certification': 'w-14 h-14'
};

const getStrengthSize = (id) => {
  return strengthSizes[id] || 'w-12 h-12';
};

const About = () => {
  return (
    <section id="about" className="py-20 w-full px-4 max-w-4xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </span>
        </h2>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Skills & Strengths */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techStack.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/80 rounded-xl p-6 hover:bg-gray-700/80 transition-colors border border-gray-700/50 backdrop-blur-sm relative"
                >
                  <div className="absolute -top-4 -left-4 w-11 h-11 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h4 className="text-sm font-medium text-cyan-400 mb-2">{category.title}</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-cyan-400/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Strengths</h3>
            <div className="space-y-4">
              {strengths.map((strength) => (
                <div key={strength.id} className="flex items-center gap-4">
                  <div className={`rounded-full bg-gradient-to-r ${strength.id} flex items-center justify-center overflow-hidden ${getStrengthSize(strength.id)}`}>
                    {strength.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{strength.title}</h4>
                    <p className="text-gray-300 text-sm">{strength.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Professional Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-8">
            {/* Professional Summary */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Tech-savvy IT student at Universitas Bina Sarana Informatika with a 4.0 GPA, experienced in IT support, system administration, and network troubleshooting. Passionate about web development, problem-solving, and innovation, striving to build efficient, scalable systems that drive meaningful impact.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">{achievement.title}</h4>
                      <p className="text-gray-300 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;