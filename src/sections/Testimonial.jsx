import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
import { motion } from "framer-motion";

const firstRow  = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => (
  <figure className="relative w-64 shrink-0 rounded-2xl glass p-5 overflow-hidden
                     hover:-translate-y-1 transition-transform duration-300 cursor-default">
    {/* Subtle accent dot */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="flex items-center gap-3 mb-3">
      <img
        src={img}
        alt={name}
        width={36}
        height={36}
        className="rounded-full bg-white/5 ring-1 ring-white/10"
      />
      <div>
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs text-white/30">{username}</p>
      </div>
    </div>

    {/* Stars */}
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="#a78bfa">
          <path d="M5 1L6.18 3.41L8.85 3.8L6.93 5.67L7.36 8.33L5 7.1L2.64 8.33L3.07 5.67L1.15 3.8L3.82 3.41L5 1Z"/>
        </svg>
      ))}
    </div>

    <blockquote className="text-sm text-white/45 leading-relaxed">{body}</blockquote>
  </figure>
);

export default function Testimonial() {
  return (
    <section className="c-space section-spacing relative overflow-hidden">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 bottom-0 h-64 w-64 rounded-full bg-violet-600/8 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-label mb-3">Testimonials</p>
          <h2 className="text-heading">What Clients Say</h2>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-4 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:28s] [--gap:1rem]">
          {firstRow.map((r) => <ReviewCard key={r.username} {...r} />)}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:28s] [--gap:1rem]">
          {secondRow.map((r) => <ReviewCard key={r.username} {...r} />)}
        </Marquee>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#04040f] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#04040f] to-transparent" />
      </div>
    </section>
  );
}