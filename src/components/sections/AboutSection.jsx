// AboutSection.jsx - Enhanced about section based on actual CV content
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Network,
  Target,
  Award,
  Clock,
  Users,
  CheckCircle
} from 'lucide-react';
import CTAButton from '../ui/CTAButton';

// Data based on CV
const professionalSummary = {
  title: "Professional Summary",
  content: "IT professional with 3 years of hands-on experience in IT operations, system administration, technical support, and software development. Proven ability to deploy scalable infrastructure solutions using automation and containerization. Strong foundation in Linux systems, cloud technologies, AI model deployment, and IoT integration. Adept at solving technical challenges under SLA constraints, coordinating across teams, and ensuring high availability of enterprise systems.",
  highlights: [
    "99.9% system uptime across production environments",
    "70% reduction in manual configuration time", 
    "60% faster incident response time",
    "100+ edge nodes managed successfully"
  ]
};

const coreCompetencies = [
  {
    id: 'infrastructure',
    title: 'Infrastructure & DevOps',
    icon: <Server size={24} />,
    skills: ['Red Hat Enterprise Linux', 'Ubuntu', 'Docker', 'Docker Compose', 'CI/CD Pipelines', 'GitHub Actions'],
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'cloud',
    title: 'Cloud & Monitoring',
    icon: <Cloud size={24} />,
    skills: ['IBM Cloud', 'AWS (basic)', 'Grafana', 'Prometheus', 'node_exporter'],
    color: 'from-blue-400 to-purple-500'
  },
  {
    id: 'security',
    title: 'Security & Tools',
    icon: <Shield size={24} />,
    skills: ['IBM QRadar X', 'WSUS Patching', 'Firewall Configuration', 'System Hardening', 'Incident Response'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 'development',
    title: 'Development & Databases',
    icon: <Code size={24} />,
    skills: ['PHP', 'React', 'Tailwind CSS', 'RESTful APIs', 'MySQL', 'PostgreSQL', 'Git'],
    color: 'from-green-400 to-cyan-500'
  }
];

const keyAchievements = [
  {
    id: 'ai-deployment',
    title: 'AI Deployment Pipeline Engineering',
    description: 'Engineered scalable AI deployment pipelines using Docker containerization, enhancing system portability and consistency across 100+ edge nodes',
    metrics: '100+ edge nodes, 70% automation gain',
    icon: <Target className="w-6 h-6 text-cyan-400" />,
    impact: 'high'
  },
  {
    id: 'system-uptime',
    title: 'System Reliability Excellence',
    description: 'Managed and maintained Ubuntu-based server infrastructure, achieving over 99.9% system uptime across all production environments',
    metrics: '99.9% uptime, 24/7 availability',
    icon: <Award className="w-6 h-6 text-cyan-400" />,
    impact: 'high'
  },
  {
    id: 'observability',
    title: 'Monitoring Stack Implementation',
    description: 'Deployed observability stack (Grafana, Prometheus, node_exporter) to monitor real-time system health, reducing incident response time by 60%',
    metrics: '60% faster response, real-time monitoring',
    icon: <Clock className="w-6 h-6 text-cyan-400" />,
    impact: 'high'
  }
];

const careerObjective = {
  title: "Career Objective",
  content: "Seeking to leverage 3 years of IT operations expertise and DevOps skills to drive infrastructure excellence and system reliability in enterprise environments. Passionate about automation, cloud technologies, and building scalable solutions that meet demanding SLA requirements."
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 w-full px-4 max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </span>
        </h2>
      </motion.div>

      {/* Career Objective - Priority for Recruiters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white">{careerObjective.title}</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">{careerObjective.content}</p>
        </div>
      </motion.div>

      {/* Professional Summary with Highlights */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white">{professionalSummary.title}</h3>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">{professionalSummary.content}</p>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {professionalSummary.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="text-center p-3 rounded-lg bg-gray-900/50 border border-gray-600"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <p className="text-white text-sm font-medium">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Core Competencies */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h3 className="text-xl font-semibold text-white mb-6 text-center">Core Competencies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCompetencies.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h4 className="text-sm font-semibold text-white mb-3">{category.title}</h4>
              <div className="space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-xs text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-12"
      >
        <h3 className="text-xl font-semibold text-white mb-6 text-center">Key Achievements</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{achievement.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-cyan-400/20 rounded text-xs text-cyan-400 font-medium">
                      {achievement.metrics}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      achievement.impact === 'high' 
                        ? 'bg-green-400/20 text-green-400' 
                        : 'bg-blue-400/20 text-blue-400'
                    }`}>
                      {achievement.impact} impact
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action for Recruiters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-400/20 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Ready to Drive Infrastructure Excellence</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Available for IT Operations, DevOps Engineer, and System Administrator positions. 
            Open to technical challenges that require expertise in automation, cloud technologies, and enterprise infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="#contact" variant="primary">
              Schedule Technical Interview
            </CTAButton>
            <div className="text-gray-400 text-sm">
              <p>📍 Jakarta, Indonesia | 🌐 Available for remote/hybrid</p>
              <p>📧 izzudin.alqa@gmail.com | 💼 Open to opportunities</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
