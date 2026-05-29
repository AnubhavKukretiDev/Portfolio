import React from "react";
import Navbar      from "./sections/Navbar";
import Hero        from "./sections/Hero";
import About       from "./sections/About";
import Projects    from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact     from "./sections/Contact";
import Footer      from "./sections/Footer";

const App = () => (
  <div className="relative overflow-x-hidden">
    <Navbar />
    <main className="mx-auto max-w-[1440px]">
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;