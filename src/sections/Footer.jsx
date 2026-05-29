import {
  FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub, FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/919368890761?text=Hi%20Anubhav,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20work%20with%20you.",
    accent: "hover:text-green-400 hover:border-green-400/30",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/anubhav-kukreti-8767a5400",
    accent: "hover:text-blue-400 hover:border-blue-400/30",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/anubhav_kukreti_",
    accent: "hover:text-pink-400 hover:border-pink-400/30",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/AnubhavKukretiDev",
    accent: "hover:text-white hover:border-white/30",
  },
];

const Footer = () => (
  <footer className="relative mt-24 border-t border-white/[0.06] overflow-hidden bg-[#04040f]">
    {/* Ambient glows */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-600/8 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/6 blur-[120px]" />
    </div>

    <div className="max-w-7xl mx-auto c-space py-20">
      {/* Main CTA block */}
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 text-xs font-medium
                       rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-400"
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            Open to freelance work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-['DM_Serif_Display'] text-5xl md:text-6xl font-normal leading-tight text-white mb-6"
          >
            Let's Build<br />
            <span className="grad-text">Future-Ready</span><br />
            Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-sm text-base text-white/40 leading-relaxed"
          >
            I craft immersive full-stack apps, cinematic 3D scenes, and
            pixel-perfect interfaces with React, Three.js, and GSAP.
          </motion.p>
        </div>

        {/* Right — CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-3">Have a project in mind?</h3>
          <p className="text-sm text-white/40 leading-relaxed mb-7">
            Modern web app, immersive 3D experience, SaaS product, or creative
            collab — let's make it exceptional.
          </p>

          <a
            href="https://wa.me/919368890761?text=Hi%20Anubhav,%20I%20saw%20your%20portfolio%20and%20I%20would%20love%20to%20work%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full items-center justify-center gap-3 py-3.5 rounded-2xl
                         text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500
                         transition-colors duration-200"
            >
              <FaWhatsapp className="text-lg" />
              Let's Talk on WhatsApp
            </motion.button>
          </a>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 mt-4 text-sm text-white/30 hover:text-white/60
                       transition-colors mx-auto"
          >
            <FaArrowUp className="text-xs" />
            Back to top
          </button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10" />

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="text-base font-semibold text-white mb-1">Anubhav Kukreti</p>
          <p className="text-xs text-white/25 tracking-wide">
            Full Stack Developer · Creative Technologist · 3D Web Engineer
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.93 }}
              className={`w-10 h-10 rounded-2xl glass flex items-center justify-center
                          text-sm text-white/40 transition-all duration-200 ${s.accent}`}
              aria-label={s.name}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-10 text-xs text-white/15 tracking-[0.2em] uppercase text-center">
        © 2026 Anubhav Kukreti — All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;