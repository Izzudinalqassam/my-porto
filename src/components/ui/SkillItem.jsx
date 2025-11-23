// SkillItem.jsx - Individual skill item component
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SkillItem = memo(({ skill, index }) => {
  return (
    <motion.div
      className="flex items-center p-2 rounded-lg bg-gray-900/30 hover:bg-gray-900/60 transition-all duration-200"
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
        <CheckCircle size={10} className="text-cyan-400" />
      </div>
      <span className="ml-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors">
        {skill}
      </span>
    </motion.div>
  );
});

SkillItem.displayName = 'SkillItem';

export default SkillItem;
