import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine"; 
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        loadSlim(tsParticles).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles container loaded", container);
    };

    return(
        <>
        {
            init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    className="fixed inset-0 w-full h-full pointer-events-none z-0"
                    options={{
                        // Explicitly paint a transparent canvas layer
                        background: { color: { value: "transparent" } },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "grab" },
                            },
                            modes: {
                                grab: { distance: 150, links: { opacity: 0.4 } },
                            },
                        },
                        particles: {
                            color: { value: "#cb6ce6" },
                            links: {
                                color: "#cb6ce6",
                                distance: 150,
                                enable: true,
                                opacity: 0.15,
                                width: 1,
                            },
                            move: {
                                enable: true,
                                speed: 0.8,
                                direction: "none",
                                random: false,
                                straight: false,
                                outModes: { default: "bounce" },
                            },
                            number: {
                                value: 40,
                                density: { enable: true, bounds: { width: 1920, height: 1080 } },
                            },
                            opacity: { value: { min: 0.1, max: 0.4 } },
                            shape: { type: "polygon", options: { polygon: { sides: 6 } } },
                            size: { value: { min: 1, max: 3 } },
                        },
                        detectRetina: true,
                    }}
                />
            )
        }
        </>
    );
}

export default ParticleBackground;