import React from 'react';
import { motion } from 'framer-motion';
import { RevealTextProps } from '../types';
import { clsx } from 'clsx';

const RevealText: React.FC<RevealTextProps> = ({ text, delay = 0, className, speed = 0.03 }) => {
  // Splitting into words to make it smoother than letters for long Tamil text
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={clsx(className)}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-1.5 mb-1">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default RevealText;
