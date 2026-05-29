import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { useFrame } from "@react-three/fiber";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id="home"
      className="relative flex min-h-screen overflow-hidden"
    >
      {/* Background */}
      <ParallaxBackground />

      {/* Radial vignette at bottom to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04040f] to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex items-center w-full c-space max-w-7xl mx-auto">
        <HeroText />
      </div>

      {/* 3D Canvas */}
      <figure
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* Pointer-events layer for canvas only when mouse isn't over text */}
        <div className="absolute inset-0 pointer-events-auto">
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader />}>
              <Float floatIntensity={0.4} rotationIntensity={0.3}>
                <Astronaut
                  scale={isMobile ? 0.23 : undefined}
                  position={isMobile ? [0, -1.5, 0] : undefined}
                />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        </div>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;