// HeroSection.jsx - Main hero section component
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  Calendar,
  Users,
  Award,
  Briefcase,
} from "lucide-react";
import ParticleBackground from "../ui/ParticleBackground";
import ProfessionalAvatar from "../common/ProfessionalAvatar";
import StatsCard from "../ui/StatsCard";
import ValueProp from "../ui/ValueProp";
import CTAButton from "../ui/CTAButton";
import SocialLinks from "../ui/SocialLinks";

const HeroSection = () => {
  const statsData = [
    { icon: Briefcase, value: "3+", label: "Years Experience", delay: 0.8 },
    { icon: Users, value: "6", label: "Companies", delay: 0.9 },
    { icon: Award, value: "5+", label: "Major Projects", delay: 1.0 },
    { icon: Users, value: "50+", label: "Servers Managed", delay: 1.1 },
  ];

  const valuePropsData = [
    {
      text: "Reduced system downtime by 40% through proactive monitoring",
      delay: 0.7,
    },
    {
      text: "Managed 50+ servers across hybrid cloud environments",
      delay: 0.8,
    },
    {
      text: "Led DevOps transformation initiatives improving deployment efficiency",
      delay: 0.9,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Optimized Particle Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50" />

      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            {/* Professional Avatar - Mobile Only */}
            <div className="lg:hidden mb-8">
              <ProfessionalAvatar />
            </div>

            {/* Professional Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Izzudin Alqassam
              </span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              IT Operations Specialist | DevOps Engineer
            </motion.div>

            {/* Professional Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Transforming infrastructure challenges into scalable solutions
              with 3+ years of experience in system administration, cloud
              operations, and DevOps practices. Specialized in IBM Cloud and
              enterprise IT environments.
            </motion.p>

            {/* Value Propositions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4 mb-8"
            >
              {valuePropsData.map((prop, index) => (
                <ValueProp key={index} text={prop.text} delay={prop.delay} />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <CTAButton href="#contact" icon={Mail} delay={1.1}>
                Hire Me
              </CTAButton>
              <CTAButton
                href="/my-porto/resumes/IT-Izzudin.pdf"
                icon={Download}
                variant="secondary"
                delay={1.2}
                download="IT-Izzudin-Alqassam-Resume.pdf"
              >
                Download Resume
              </CTAButton>
              <CTAButton
                href="https://calendly.com/izzudinalqassam"
                icon={Calendar}
                variant="secondary"
                delay={1.3}
              >
                Schedule Interview
              </CTAButton>
            </motion.div>
          </div>

          {/* Right Column - Stats & Avatar */}
          <div className="lg:col-span-1">
            {/* Desktop Avatar */}
            <div className="hidden lg:block mb-8">
              <ProfessionalAvatar />
            </div>

            {/* Professional Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-4"
            >
              {statsData.map((stat, index) => (
                <StatsCard
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  delay={stat.delay}
                />
              ))}
            </motion.div>

            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
