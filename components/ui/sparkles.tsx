"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export function SparklesCore({
  id,
  className,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 100,
}: SparklesProps) {
  const [init, setInit] = useState(false);
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const handleLoaded = async (_container?: Container) => {};

  if (!init) return null;

  return (
    <Particles
      id={id || generatedId}
      className={className}
      particlesLoaded={handleLoaded}
      options={{
        background: { color: { value: background } },
        fullScreen: { enable: false, zIndex: 1 },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: false, mode: "repulse" },
          },
          modes: { push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } },
        },
        particles: {
          color: { value: particleColor },
          move: {
            enable: true,
            speed: { min: 0.1, max: 1 },
            direction: "none",
            outModes: { default: "out" },
            random: false,
            straight: false,
          },
          number: {
            value: particleDensity,
            density: { enable: true, width: 400, height: 400 },
          },
          opacity: {
            value: { min: 0.1, max: 1 },
            animation: {
              enable: true,
              speed,
              sync: false,
              startValue: "random",
              destroy: "none",
            },
          },
          size: {
            value: { min: minSize, max: maxSize },
          },
          shape: { type: "circle" },
        },
        detectRetina: true,
      }}
    />
  );
}
