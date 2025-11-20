import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';
import { clsx } from 'clsx';

const Section: React.FC<SectionProps> = ({ id, className, children, background = 'light' }) => {
  const bgClasses = {
    light: 'bg-paper text-ink',
    dark: 'bg-midnight text-slate-200',
    gradient: 'bg-gradient-to-b from-rose-50 to-white text-ink',
  };

  return (
    <section
      id={id}
      className={clsx(
        'min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden py-24 px-6 md:px-12 transition-colors duration-1000',
        bgClasses[background],
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, margin: "-10%" }}
        className="w-full max-w-3xl relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
