// Contact.jsx - Simplified contact information section
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'izzudin.alqa@gmail.com',
      href: 'mailto:izzudin.alqa@gmail.com',
      color: 'text-cyan-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jakarta, Indonesia',
      href: null,
      color: 'text-cyan-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 857-1234-5678',
      href: 'tel:+6285712345678',
      color: 'text-cyan-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@izzudinalqassam',
      href: 'https://github.com/izzudinalqassam',
      color: 'text-cyan-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@izzudinalqassam',
      href: 'https://linkedin.com/in/izzudinalqassam',
      color: 'text-cyan-400'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@izzudin.alqa',
      href: 'https://instagram.com/izzudin.alqa',
      color: 'text-cyan-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@izzudinalqassam',
      href: 'https://twitter.com/izzudinalqassam',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 w-full px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact Information
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Available for IT Operations, DevOps, and System Administrator opportunities
        </p>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
              <Mail size={16} className="text-white" />
            </div>
            Get in Touch
          </h3>
          
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-3">
                <info.icon className={`w-5 h-5 ${info.color} mt-0.5 flex-shrink-0`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white hover:text-cyan-400 transition-colors duration-300"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability Status */}
          <div className="mt-6 p-4 bg-green-400/10 rounded-lg border border-green-400/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-green-400 font-medium">Available for Opportunities</span>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Open to full-time, remote, and hybrid positions in IT Operations and DevOps roles
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
              <Github size={16} className="text-white" />
            </div>
            Social Profiles
          </h3>
          
          <div className="space-y-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
              >
                <social.icon className={`w-5 h-5 ${social.color}`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-400">{social.label}</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                    {social.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/30"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
              <Phone size={16} className="text-white" />
            </div>
            Quick Connect
          </h3>
          
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Ready to bring expertise in infrastructure automation, cloud technologies, and system reliability to your team.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm text-gray-300">Immediate availability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-sm text-gray-300">3+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-sm text-gray-300">DevOps & IT Operations focus</span>
              </div>
            </div>

            <motion.a
              href="mailto:izzudin.alqa@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold text-center hover:opacity-90 transition-opacity duration-300"
            >
              Send Email Directly
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
