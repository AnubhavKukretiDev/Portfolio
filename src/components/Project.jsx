// Project.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, description, subDescription, href, image, tags, setPreview }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 gap-6
                   border-b border-white/[0.06] cursor-default"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Left */}
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-3 mt-2">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs font-medium text-white/35 border border-white/[0.07]
                           px-2.5 py-1 rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-sm font-medium text-white/40
                     hover:text-white transition-colors shrink-0 group/btn"
        >
          View details
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full
                           border border-white/[0.1] group-hover/btn:border-white/30
                           transition-colors">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </motion.div>

      {open && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Project;