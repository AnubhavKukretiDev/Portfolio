"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref          = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  const { scrollYProgress } = useScroll({
    target:  containerRef,
    offset: ["start 15%", "end 60%"],
  });

  const lineHeight  = useTransform(scrollYProgress, [0, 1], [0, height]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="c-space section-spacing max-w-7xl mx-auto" ref={containerRef}>
      <p className="text-label mb-3">Career</p>
      <h2 className="text-heading mb-16">Work Experience</h2>

      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
            className="flex gap-8 md:gap-14 pb-16 last:pb-0"
          >
            {/* Timeline spine + dot */}
            <div className="relative flex flex-col items-center pt-1">
              <div className="w-3 h-3 rounded-full bg-violet-500 ring-4 ring-violet-500/15 shrink-0 z-10" />
              {index < data.length - 1 && (
                <div className="flex-1 w-px bg-white/[0.07] mt-2" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-2">
              {/* Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <span className="text-xs font-medium text-violet-400 tabular-nums">{item.date}</span>
                <span className="hidden sm:block text-white/15">·</span>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <span className="hidden sm:block text-white/15">·</span>
                <span className="text-sm text-white/40">{item.job}</span>
              </div>

              {/* Body */}
              <div className="glass rounded-2xl p-6 space-y-3">
                {item.contents.map((c, i) => (
                  <p key={i} className="text-sm text-white/50 leading-relaxed">{c}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Animated progress line */}
        <div
          className="absolute left-[5px] top-0 w-px overflow-hidden"
          style={{ height: height + "px" }}
        >
          <motion.div
            style={{ height: lineHeight, opacity: lineOpacity }}
            className="w-full bg-gradient-to-b from-violet-500 via-violet-400/50 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};