import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => (
  <section id="experience" className="relative">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-violet-600/8 blur-[120px]" />
    </div>
    <Timeline data={experiences} />
  </section>
);

export default Experiences;