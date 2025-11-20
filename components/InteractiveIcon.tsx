import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface InteractiveIconProps {
  icon: LucideIcon;
  color?: string;
  onClick?: () => void;
  delay?: number;
}

const InteractiveIcon: React.FC<InteractiveIconProps> = ({ icon: Icon, color = "text-rose-400", onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`cursor-pointer inline-block p-2 rounded-full ${color} bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all`}
    >
      <Icon size={24} strokeWidth={1.5} />
    </motion.div>
  );
};

export default InteractiveIcon;
