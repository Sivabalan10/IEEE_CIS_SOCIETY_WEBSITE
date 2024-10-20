import React, { useCallback } from "react";
import Particles from "react-tsparticles";

function Particle() {
  // Create a callback to handle mouse movement
  const particlesInit = useCallback(async (engine) => {
    // You can initialize the tsParticles instance here, if needed
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // You can perform operations when the particles are loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: false, // Disable automatic movement
            out_mode: "out",
          },
          size: {
            value: 3,
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Change particles direction on hover
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            push: {
              particles_nb: 1,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
}

export default Particle;
