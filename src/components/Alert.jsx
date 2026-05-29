import { motion, AnimatePresence } from "framer-motion";

const icons = {
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  danger: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 5V8.5M8 11H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

const Alert = ({ type, text }) => (
  <AnimatePresence>
    <motion.div
      className="fixed z-50 bottom-6 right-6"
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.95 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium
                    border shadow-2xl backdrop-blur-xl
                    ${type === "danger"
                      ? "bg-red-950/80 border-red-500/20 text-red-300"
                      : "bg-emerald-950/80 border-emerald-500/20 text-emerald-300"}`}
      >
        <span className="shrink-0">{icons[type] ?? icons.success}</span>
        <span className="text-white/80">{text}</span>
      </div>
    </motion.div>
  </AnimatePresence>
);

export default Alert;