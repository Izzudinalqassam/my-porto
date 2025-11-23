// Hero.jsx - Enhanced professional hero section with recruiter-focused content
import { motion } from "framer-motion";
import { useRef, useEffect, useMemo } from "react";
import {
  Mail,
  Download,
  Calendar,
  Users,
  Award,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import profilePicture from "../assets/profile-pictures/alqa.jpeg";

// Optimized particle background with reduced complexity
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particleCount = 50; // Reduced from 100 for better performance

  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: `rgba(100, 210, 255, ${Math.random() * 0.3 + 0.1})`,
      })),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y < 0) particle.y = canvas.height;

        drawParticle(particle);
      });
      requestAnimationFrame(updateParticles);
    };

    updateParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [particles]);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

// Stats card component
const StatsCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
        <Icon size={20} className="text-cyan-400" />
      </div>
      <div>
        <div className="text-xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  </motion.div>
);

// Value proposition bullet point
const ValueProp = ({ text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
  >
    <ChevronRight size={20} className="text-cyan-400 mt-0.5 flex-shrink-0" />
    <span className="text-gray-300 leading-relaxed">{text}</span>
  </motion.div>
);

// CTA Button component
const CTAButton = ({
  href,
  icon: Icon,
  children,
  variant = "primary",
  delay,
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300";
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/25",
    secondary:
      "bg-gray-800/50 text-gray-300 hover:bg-gray-800/70 hover:text-cyan-400 border border-gray-700 hover:border-cyan-400/50",
  };

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.a>
  );
};

// Enhanced avatar component with professional styling
const ProfessionalAvatar = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 },
    }}
    whileHover={{ scale: 1.05 }}
    className="relative w-40 h-40 mx-auto mb-8 group"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
    <img
      src={profilePicture}
      alt="Izzudin Alqassam - IT Operations Specialist"
      className="relative w-full h-full rounded-full border-4 border-gray-800 bg-gray-700 object-cover shadow-2xl"
      style={{
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    />
  </motion.div>
);

// Main Hero component
export default function Hero() {
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
            {/* Professional Avatar */}
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
              <ValueProp
                text="Reduced system downtime by 40% through proactive monitoring"
                delay={0.7}
              />
              <ValueProp
                text="Managed 50+ servers across hybrid cloud environments"
                delay={0.8}
              />
              <ValueProp
                text="Led DevOps transformation initiatives improving deployment efficiency"
                delay={0.9}
              />
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
                href="/resume.pdf"
                icon={Download}
                variant="secondary"
                delay={1.2}
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
              <StatsCard
                icon={Briefcase}
                value="3+"
                label="Years Experience"
                delay={0.8}
              />
              <StatsCard icon={Users} value="2" label="Companies" delay={0.9} />
              <StatsCard
                icon={Award}
                value="5+"
                label="Major Projects"
                delay={1.0}
              />
              <StatsCard
                icon={Users}
                value="50+"
                label="Servers Managed"
                delay={1.1}
              />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-4 mt-8"
            >
              <a
                href="https://github.com/izzudinalqassam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                aria-label="GitHub Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C21.14 22.18 24 16.42 24 12A10 10 0 0012 2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/izzudinalqassam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
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
}
