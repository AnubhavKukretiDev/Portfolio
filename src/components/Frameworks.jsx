import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks({ compact = false }) {
  const skills = [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/ffffff" },
    { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/ffffff" },
    { name: "Swift", icon: "https://cdn.simpleicons.org/swift/F05138" },
    {
      name: "SwiftUI",
      icon: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
    },
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ffffff" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  ];

  const outerRadius = compact ? 120 : 185;
  const middleRadius = compact ? 85 : 125;
  const innerRadius = compact ? 55 : 70;

  const iconSize = compact ? 38 : 58;

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent">
      {/* softer glow for compact mode */}
      <div
        className={`absolute rounded-full blur-3xl ${
          compact
            ? "h-40 w-40 bg-cyan-500/10"
            : "h-80 w-80 bg-cyan-500/20"
        }`}
      />
      <div
        className={`absolute rounded-full blur-3xl ${
          compact
            ? "h-52 w-52 bg-purple-500/10"
            : "h-[28rem] w-[28rem] bg-purple-500/10"
        }`}
      />

      {/* Outer Orbit */}
      <OrbitingCircles iconSize={iconSize} radius={outerRadius} speed={1}>
        {skills.map((skill, index) => (
          <Icon key={index} skill={skill} />
        ))}
      </OrbitingCircles>

      {/* Middle Orbit */}
      <OrbitingCircles
        iconSize={compact ? 30 : 45}
        radius={middleRadius}
        reverse
        speed={2}
      >
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} skill={skill} />
        ))}
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles
        iconSize={compact ? 22 : 32}
        radius={innerRadius}
        speed={3}
      >
        {skills.slice(0, 10).map((skill, index) => (
          <Icon key={index} skill={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ skill }) => {
  return (
    <div className="group relative">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-white/10">
        <img
          src={skill.icon}
          alt={skill.name}
          loading="lazy"
          className="h-7 w-7 object-contain"
        />
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-md bg-white px-2 py-1 text-xs font-semibold text-black opacity-0 transition-all group-hover:opacity-100">
        {skill.name}
      </div>
    </div>
  );
};