import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "anubhavkukreti@icloud.com";

  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <motion.button
      onClick={copy}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full
                 text-sm font-medium text-white overflow-hidden cursor-pointer
                 border border-white/[0.12] bg-white/[0.05] hover:border-white/20 hover:bg-white/[0.08]
                 transition-colors duration-200 w-full"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="done"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L5.5 10.5L12 3.5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-green-400">Copied!</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="4.5" y="4.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M2 9.5V2.5A1 1 0 0 1 3 1.5H10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            Copy email address
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;