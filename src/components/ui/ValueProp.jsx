// ValueProp.jsx - Value proposition bullet point component
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ValueProp = ({ text, delay = 0 }) => (
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

export default ValueProp;
