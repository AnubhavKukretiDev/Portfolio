import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ProjectDetails = ({ title, description, subDescription, image, tags, href, closeModal }) => {
  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Scrim */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Panel */}
        <motion.div
          className="relative z-10 w-full max-w-lg glass rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Hero image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-white/10
                         flex items-center justify-center text-white/70 hover:text-white
                         transition-colors backdrop-blur-sm"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-7">
            <h2 className="text-2xl font-semibold text-white mb-3">{title}</h2>
            <p className="text-sm text-white/50 leading-relaxed mb-3">{description}</p>
            {subDescription.map((s, i) => (
              <p key={i} className="text-sm text-white/40 leading-relaxed mb-2">• {s}</p>
            ))}

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.07]">
              <div className="flex gap-2.5">
                {tags.map((tag) => (
                  <div
                    key={tag.id}
                    title={tag.name}
                    className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/[0.08]
                               flex items-center justify-center hover:bg-white/[0.1] transition-colors"
                  >
                    <img src={tag.path} alt={tag.name} className="w-4 h-4 object-contain" />
                  </div>
                ))}
              </div>

              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/60
                             hover:text-white transition-colors"
                >
                  Live project
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;