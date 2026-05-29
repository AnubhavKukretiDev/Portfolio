import { motion } from "framer-motion";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { TechStack } from "../components/TechStack";

const reveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

/* ── Reusable glass card ── */
const Card = ({ className = "", children }) => (
  <div
    className={`glass rounded-3xl relative overflow-hidden
    hover:-translate-y-[3px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
    transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const About = () => (
  <section id="about" className="c-space section-spacing relative">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
    </div>

    <div className="max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div
        variants={reveal()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-label mb-3">Who I am</p>
        <h2 className="text-heading">About Me</h2>
        <p className="mt-4 max-w-xl text-white/40 leading-relaxed">
          I build fast, scalable, and visually rich web applications with modern
          UI systems and immersive experiences.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* ── INTRO ── */}
        <motion.div
          variants={reveal(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-3 lg:row-span-2"
        >
          <Card className="h-full min-h-[18rem] p-8 flex flex-col justify-end relative overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <img
              src="/assets/coding-pov.png"
              alt="coding background"
              className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110 blur-[0.3px]"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

            {/* SOFT COLOR GLOW (adds premium feel) */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

            {/* CODE WATERMARK */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
              <pre className="text-white text-[10px] leading-[1.6] p-6 opacity-[0.05] font-mono whitespace-pre-wrap break-all">
                {`const dev = {
  name: "Anubhav Kukreti",
  role: "Full Stack Developer",
  stack: ["React", "Node", "Three.js"],
  passion: "Building premium web experiences",
  location: "Uttarakhand, India 🇮🇳",
};`}
              </pre>
            </div>

            {/* CONTENT */}
            <div className="relative z-10">
              <p className="text-label mb-3">Introduction</p>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Hi, I'm <span className="grad-text">Anubhav Kukreti</span>
              </h3>

              <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                Full-stack developer focused on building modern, scalable, and
                visually rich applications with strong UI/UX and backend
                architecture.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* ── LOCATION ── */}
        <motion.div
          variants={reveal(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <Card className="min-h-[16rem] p-7 flex items-center justify-between">
            <div className="z-10 max-w-[60%]">
              <p className="text-label mb-3">Location</p>
              <h3 className="text-lg font-semibold text-white mb-2">
                Uttarakhand, India
              </h3>
              <p className="text-sm text-white/45 mb-4">
                Open to remote & global opportunities
              </p>

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                Available for Work
              </span>
            </div>

            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] z-0">
              <Globe />
            </div>
          </Card>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div variants={reveal(0.15)} className="lg:col-span-3">
          <Card className="min-h-[16rem] p-7 flex flex-col items-center justify-center text-center bg-gradient-to-br from-violet-600/10 to-cyan-500/5">
            <h3 className="text-lg font-semibold text-white mb-2">
              Let’s build something great
            </h3>

            <p className="text-sm text-white/40 mb-6">
              Got an idea? I’d love to collaborate.
            </p>

            <CopyEmailButton />
          </Card>
        </motion.div>

        {/* ── TECH STACK ── */}
        <motion.div variants={reveal(0.2)} className="lg:col-span-6">
          <Card className="p-7">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-label mb-1">Technologies</p>
                <h3 className="text-lg font-semibold text-white">My Toolbox</h3>
              </div>
            </div>

            <TechStack />
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;