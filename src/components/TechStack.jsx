/**
 * TechStack.jsx
 * Replaces the broken orbit-based Frameworks component inside the About card.
 * Uses two counter-scrolling marquee rows — works at any container size,
 * zero overflow issues, fully mobile-compatible.
 */

const skills = [
  { name: "HTML5",      icon: "https://cdn.simpleicons.org/html5/E34F26"        },
  { name: "CSS3",       icon: "https://cdn.simpleicons.org/css3/1572B6"         },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E"   },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6"   },
  { name: "React",      icon: "https://cdn.simpleicons.org/react/61DAFB"        },
  { name: "Next.js",    icon: "https://cdn.simpleicons.org/nextdotjs/ffffff"     },
  { name: "Node.js",    icon: "https://cdn.simpleicons.org/nodedotjs/339933"    },
  { name: "Three.js",   icon: "https://cdn.simpleicons.org/threedotjs/ffffff"   },
  { name: "TailwindCSS",icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4"  },
  { name: "MongoDB",    icon: "https://cdn.simpleicons.org/mongodb/47A248"      },
  { name: "Firebase",   icon: "https://cdn.simpleicons.org/firebase/FFCA28"     },
  { name: "Redux",      icon: "https://cdn.simpleicons.org/redux/764ABC"        },
  { name: "Git",        icon: "https://cdn.simpleicons.org/git/F05032"          },
  { name: "GitHub",     icon: "https://cdn.simpleicons.org/github/ffffff"       },
  { name: "Vite",       icon: "https://cdn.simpleicons.org/vite/646CFF"         },
  { name: "Figma",      icon: "https://cdn.simpleicons.org/figma/F24E1E"        },
  { name: "Swift",      icon: "https://cdn.simpleicons.org/swift/F05138"        },
  { name: "Java",       icon: "https://cdn.simpleicons.org/openjdk/ffffff"      },
];

const rowA = skills.slice(0, 9);
const rowB = skills.slice(9);

/* ── Single icon chip ──────────────────────────────────────────────────── */
const Chip = ({ name, icon }) => (
  <div className="flex items-center gap-2.5 shrink-0 px-3.5 py-2 rounded-xl
                  border border-white/[0.07] bg-white/[0.03]
                  hover:border-white/15 hover:bg-white/[0.06] transition-colors duration-200 group">
    <img
      src={icon}
      alt={name}
      loading="lazy"
      className="w-5 h-5 object-contain"
      onError={(e) => { e.target.style.display = "none"; }}
    />
    <span className="text-xs font-medium text-white/50 group-hover:text-white/75 transition-colors whitespace-nowrap">
      {name}
    </span>
  </div>
);

/* ── Infinite scrolling row ─────────────────────────────────────────────── */
const ScrollRow = ({ items, reverse = false, duration = "35s" }) => {
  /* Duplicate items so the loop is seamless */
  const doubled = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0  w-12 z-10
                      bg-gradient-to-r from-[var(--card-bg,#04040f)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10
                      bg-gradient-to-l from-[var(--card-bg,#04040f)] to-transparent" />

      <div
        className="flex gap-2.5 w-max"
        style={{
          animation: `techScroll ${duration} linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {doubled.map((s, i) => (
          <Chip key={`${s.name}-${i}`} {...s} />
        ))}
      </div>
    </div>
  );
};

/* ── Main export ────────────────────────────────────────────────────────── */
export const TechStack = () => (
  <>
    {/* Inject keyframe once */}
    <style>{`
      @keyframes techScroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-33.333%); }
      }
    `}</style>

    <div className="flex flex-col gap-2.5 w-full overflow-hidden">
      <ScrollRow items={rowA} duration="30s" />
      <ScrollRow items={rowB} duration="26s" reverse />
    </div>
  </>
);

export default TechStack;