// ProfessionalAvatar.jsx - Enhanced avatar component with professional styling
import { motion } from "framer-motion";
import profilePicture from "../../assets/profile-pictures/alqa.jpeg";

const ProfessionalAvatar = ({ className = "" }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 },
    }}
    whileHover={{ scale: 1.05 }}
    className={`relative w-40 h-40 mx-auto mb-8 group ${className}`}
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

export default ProfessionalAvatar;
