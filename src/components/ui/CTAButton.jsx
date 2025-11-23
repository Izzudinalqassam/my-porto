// CTAButton.jsx - Professional call-to-action button component
import { motion } from "framer-motion";

const CTAButton = ({
  href,
  icon: Icon,
  children,
  variant = "primary",
  delay = 0,
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

export default CTAButton;
