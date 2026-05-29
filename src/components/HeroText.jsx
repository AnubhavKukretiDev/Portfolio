import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
});

const HeroText = () => {
  const words = ["Scalable", "Modern", "Secure"];

  return (
    <div className="z-10 mt-28 md:mt-44 text-left w-full max-w-3xl">
      {/* Eye-brow label */}
      <motion.p
        variants={fade(0.6)}
        initial="hidden"
        animate="visible"
        className="text-label mb-5"
      >
        Full-Stack &amp; 3D Web Developer
      </motion.p>

      {/* Main headline */}
      <motion.h1
        variants={fade(0.8)}
        initial="hidden"
        animate="visible"
        className="font-['DM_Serif_Display'] text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-white"
      >
        Hi, I'm&nbsp;
        <span className="grad-text">Anubhav.</span>
      </motion.h1>

      {/* Animated descriptor line */}
      <motion.div
        variants={fade(1.0)}
        initial="hidden"
        animate="visible"
        className="mt-4 flex flex-wrap items-baseline gap-x-3 text-4xl md:text-6xl lg:text-7xl font-['DM_Serif_Display'] font-normal leading-tight text-white/30"
      >
        Building&nbsp;
        <FlipWords
          words={words}
          className="grad-text-cyan"
        />
        &nbsp;Solutions
      </motion.div>

      {/* Sub-copy */}
      <motion.p
        variants={fade(1.25)}
        initial="hidden"
        animate="visible"
        className="mt-8 max-w-md text-base md:text-lg text-white/40 leading-relaxed"
      >
        I craft immersive full-stack applications, 3D web experiences, and
        pixel-perfect interfaces built to perform.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={fade(1.45)}
        initial="hidden"
        animate="visible"
        className="mt-10 flex items-center gap-4"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                     bg-white text-[#04040f] hover:bg-white/90 transition-all duration-200"
        >
          View Work
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                     border border-white/[0.12] text-white/60 hover:text-white hover:border-white/25
                     transition-all duration-200"
        >
          Let's Talk
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;