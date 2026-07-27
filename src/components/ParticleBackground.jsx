import React, { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// 1. Define the engine initializer outside the component
const particlesInit = async (engine) => {
    await loadSlim(engine);
};

function ParticleBackground() {
    // 2. Memoize options so tsParticles doesn't re-create the canvas on every render
    const options = useMemo(
        () => ({
            background: {
                color: { value: "transparent" },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    grab: {
                        distance: 150,
                        links: { opacity: 0.5 },
                    },
                },
            },
            particles: {
                color: { value: "#cb6ce6" },
                links: {
                    color: "#cb6ce6",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: { default: "bounce" },
                },
                number: {
                    value: 60,
                    density: { enable: true },
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 },
                },
                shape: {
                    type: "polygon",
                    options: { polygon: { sides: 6 } },
                },
                size: {
                    value: { min: 2, max: 4 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <ParticlesProvider init={particlesInit}>
            <Particles
                id="tsparticles"
                className="fixed inset-0 w-full h-full pointer-events-none z-0"
                options={options}
            />
        </ParticlesProvider>
    );
}

export default ParticleBackground;