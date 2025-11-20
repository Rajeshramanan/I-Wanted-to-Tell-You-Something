
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Music, 
  Heart, 
  Coffee, 
  Flower2, 
  Wind, 
  Sun, 
  Moon, 
  Users, 
  Footprints,
  ArrowDown,
  Stars,
  CloudRain,
  MailOpen
} from 'lucide-react';
import { clsx } from 'clsx';

import Section from './components/Section';
import RevealText from './components/RevealText';
import InteractiveIcon from './components/InteractiveIcon';
import { CONTENT } from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [hasInteracted, setHasInteracted] = useState(false);

  // Parallax background opacity for landing
  const landingOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scrollToStart = () => {
    const element = document.getElementById('tamil-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const playSoundEffect = (type: 'chime' | 'soft') => {
    // Simple synthetic sound simulation would go here, or use a small library.
    // For this scope, we focus on visual feedback.
  };

  return (
    <main className="relative w-full font-serif text-lg md:text-xl leading-relaxed text-ink/80">
      
      {/* Scroll Progress */}
      <motion.div 
        style={{ width: progressBar }} 
        className="fixed top-0 left-0 h-1 bg-rose-400 z-50 origin-left"
      />

      {/* --- LANDING PAGE --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fdfbf7]">
        {/* Soft Ambient Background */}
        <motion.div 
          style={{ opacity: landingOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-orange-50/40 to-indigo-50/20" />
          {/* Soft Blobs */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-rose-100/30 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-100/40 blur-[120px]" />
          <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-white blur-[80px]" />
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center space-y-8">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif text-ink/90 tracking-tight leading-tight"
          >
            I Wanted to Tell You Something…
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="text-lg md:text-xl font-sans font-light text-ink/60 tracking-wide max-w-lg"
          >
            Before you read… just know this comes from a calm place in my heart.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <button 
              onClick={scrollToStart}
              className="group flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-full text-ink/70 shadow-sm hover:shadow-lg hover:bg-white hover:text-rose-900 transition-all duration-500"
            >
              <span className="font-sans text-sm uppercase tracking-widest">Read Letter</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 text-xs font-sans text-ink/40 tracking-widest uppercase"
        >
          No pressure. Just honesty.
        </motion.div>
      </section>


      {/* --- TAMIL PART 1: The Classroom --- */}
      <Section id="tamil-1" className="font-tamil">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center mb-4">
            <InteractiveIcon icon={Wind} delay={0.2} />
          </div>
          
          {CONTENT.tamil.part1.map((line, idx) => (
            <RevealText 
              key={idx} 
              text={line} 
              delay={idx * 0.5} 
              className={(idx === 0 || idx === 1) ? "text-rose-900 font-medium" : ""}
            />
          ))}

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 0.2 }}
             className="absolute -right-20 top-20 pointer-events-none"
          >
             <Music size={300} className="text-rose-200 rotate-12" />
          </motion.div>
        </div>
      </Section>


      {/* --- TAMIL PART 2: Details --- */}
      <Section id="tamil-2" background="gradient" className="font-tamil">
        <div className="flex flex-col gap-8 text-center md:text-left">
           <div className="flex justify-center md:justify-start mb-6">
             <InteractiveIcon icon={Coffee} color="text-amber-700" />
           </div>

           {CONTENT.tamil.part2.map((line, idx) => (
            <RevealText 
              key={idx} 
              text={line} 
              delay={0.2}
              // The last line (which is the moved one about collecting details) should be pink
              className={idx === CONTENT.tamil.part2.length - 1 ? "text-rose-900 font-medium mt-8 text-center" : "mb-4"}
            />
          ))}
          
          <motion.div className="w-full h-px bg-rose-200 my-8" />
        </div>
      </Section>


      {/* --- TAMIL PART 3: Transition (Morning/Flowers) --- */}
      <Section id="tamil-3" className="font-tamil bg-slate-50">
        <div className="space-y-8 relative">
           <motion.div 
             className="absolute -top-10 -left-10 text-blue-200/50"
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           >
             <Flower2 size={200} />
           </motion.div>

           {CONTENT.tamil.part3.map((line, idx) => (
             <RevealText 
              key={idx} 
              text={line} 
              className={clsx("relative z-10", idx === 0 && "text-rose-900 font-medium")} 
            />
           ))}
        </div>
      </Section>

      {/* --- TAMIL PART 4: The Voice & Significance (New Section) --- */}
      <Section id="tamil-4" className="font-tamil bg-white">
         <div className="space-y-8 relative max-w-3xl mx-auto">
            {CONTENT.tamil.part4.map((line, idx) => (
              <RevealText 
                key={idx}
                text={line}
                className={clsx(
                  "relative z-10", 
                  idx === 0 && "text-rose-900 font-medium", // Recurring phrase
                  line.includes("You are significant to me") && "text-rose-900 font-semibold mt-4 block" // Specific line styling
                )}
              />
            ))}
         </div>
      </Section>


      {/* --- ENGLISH TRANSITION INTERLUDE --- */}
      <div className="h-32 bg-gradient-to-b from-slate-50 to-midnight flex items-center justify-center">
         <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
         />
      </div>


      {/* --- ENGLISH PART 1: The Past (Dark Mode) --- */}
      <Section id="english-1" background="dark">
        <div className="space-y-6 max-w-2xl mx-auto font-sans font-light tracking-wide">
          <div className="flex justify-center mb-8">
            <CloudRain className="text-slate-500" size={32} />
          </div>

          {CONTENT.english.past.map((paragraph, idx) => (
            <RevealText 
              key={idx} 
              text={paragraph} 
              className="text-slate-300/90"
              speed={0.01}
            />
          ))}
        </div>
      </Section>


      {/* --- ENGLISH PART 2: The Impact (Light Breaking Through) --- */}
      <Section id="english-2">
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="absolute -top-[20%] -right-[20%] w-[50%] h-[50%] bg-rose-100 rounded-full blur-3xl opacity-50" 
            />
         </div>

         <div className="space-y-8 relative z-10">
            <div className="flex items-center gap-3 text-rose-400 mb-4">
              <Sun size={24} />
            </div>

            {CONTENT.english.impact.map((p, idx) => (
              <RevealText key={idx} text={p} className="mb-4" />
            ))}

            <motion.div 
              whileInView={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex justify-center py-6"
            >
              <Heart size={40} className="text-rose-300 fill-rose-100" />
            </motion.div>
         </div>
      </Section>


      {/* --- ENGLISH PART 3: The Ask --- */}
      <Section id="english-3" className="border-y border-stone-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1">
              <img 
                src="https://picsum.photos/id/42/800/800" 
                alt="Coffee setup" 
                className="rounded-lg shadow-xl grayscale-[50%] opacity-80 hover:grayscale-0 transition-all duration-1000"
              />
           </div>
           <div className="order-1 md:order-2 space-y-6">
              {CONTENT.english.ask.map((p, idx) => (
                <RevealText key={idx} text={p} className={idx === 0 ? "font-medium" : "italic text-stone-600"} />
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 mt-4 border border-stone-400 rounded-full text-stone-600 hover:bg-stone-800 hover:text-white transition-colors font-sans text-sm uppercase tracking-widest"
              >
                Just a Chance
              </motion.button>
           </div>
        </div>
      </Section>


      {/* --- ENGLISH PART 4: Why Her (Distinction) --- */}
      <Section id="english-4" background="gradient">
         <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <Users className="text-stone-300 mb-4" size={48} />
            </div>
            
            {CONTENT.english.distinction.map((p, idx) => (
              <RevealText 
                key={idx} 
                text={p} 
                className={p.includes("heart you keep") ? "text-rose-800 font-semibold text-2xl font-serif" : ""}
              />
            ))}
         </div>
      </Section>


      {/* --- ENGLISH PART 5: The Promise & Wait --- */}
      <Section id="english-5">
         <div className="flex flex-col items-center space-y-8">
            <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-1/3 h-full bg-rose-200"
              />
            </div>
            
            {CONTENT.english.promise.map((p, idx) => (
              <RevealText 
                key={idx} 
                text={p} 
                className={p.includes("sing around me to change") ? "text-rose-900 font-medium" : ""}
              />
            ))}

            <div className="flex justify-center gap-8 pt-8 text-stone-300">
               <Moon size={24} />
               <Stars size={24} />
               <Sun size={24} />
            </div>
         </div>
      </Section>


      {/* --- CONCLUSION --- */}
      <Section id="conclusion" className="pb-48">
         <div className="relative max-w-3xl mx-auto text-center space-y-10">
            {CONTENT.english.conclusion.map((p, idx) => (
              <RevealText 
                key={idx} 
                text={p} 
                className={idx === CONTENT.english.conclusion.length - 1 ? "text-2xl font-serif text-rose-900 mt-8" : ""}
              />
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1.5 }}
              className="pt-16 flex flex-col items-center gap-6"
            >
               <div className="flex gap-4 items-center text-stone-400">
                 <Footprints size={32} />
                 <div className="h-px w-12 bg-stone-300" />
                 <Footprints size={32} className="transform translate-y-2" />
               </div>

               <h3 className="text-3xl font-serif italic">Would you walk beside me?</h3>
               
               <a 
                  href="mailto:your-email@example.com?subject=About%20the%20walk..."
                  className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full"
               >
                 <span className="relative z-10 text-stone-600 group-hover:text-rose-900 transition-colors duration-500">Let me know</span>
                 <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-rose-50/50"></div>
               </a>
            </motion.div>
         </div>
      </Section>

      <footer className="w-full py-8 text-center text-stone-300 text-sm font-sans">
        <p>Written from the heart.</p>
      </footer>

    </main>
  );
};

export default App;
