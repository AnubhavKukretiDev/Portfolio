import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation({ onClick }) {
  const links = [
    { label: "Home",    href: "#home"    },
    { label: "About",   href: "#about"   },
    { label: "Work",    href: "#work"    },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <ul className="nav-ul">
      {links.map((l) => (
        <li key={l.href} className="nav-li">
          <a className="nav-link" href={l.href} onClick={onClick}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#04040f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl c-space">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <a
            href="/"
            className="text-sm font-semibold tracking-widest text-white/80 hover:text-white transition-colors uppercase"
          >
            Anubhav
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            <Navigation />
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full
                         bg-white/[0.06] border border-white/[0.1] text-white/70 hover:text-white hover:bg-white/[0.1]
                         transition-all duration-200"
            >
              Hire me
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
              <span className="block w-3 h-px bg-current ml-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden border-t border-white/[0.06] bg-[#04040f]/95 backdrop-blur-xl"
          >
            <nav className="c-space py-6">
              <Navigation onClick={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;