// StatsCard.jsx - Professional statistics card component
import { motion } from "framer-motion";

const StatsCard = ({ icon: Icon, value, label, delay = 0 }) => (
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

export default StatsCard;
