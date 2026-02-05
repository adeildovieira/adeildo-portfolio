"use client";

import { useEffect, useRef } from "react";

/**
 * FilmGrain Component
 * 
 * Creates a cinematic film grain overlay effect with:
 * - Animated noise/grain texture
 * - Subtle gate weave (vertical jitter simulating old film projectors)
 * - Grainy gradient background blend
 * 
 * This component renders a full-screen fixed overlay that sits on top
 * of all content, creating that nostalgic, cinematic atmosphere.
 */
export function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let gateWeaveOffset = 0;

    // Resize canvas to fill viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Generate film grain noise
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      // Gate weave effect - subtle vertical oscillation
      gateWeaveOffset = Math.sin(Date.now() * 0.001) * 0.5;

      for (let i = 0; i < data.length; i += 4) {
        // Random grain value with low intensity for subtlety
        const grain = Math.random() * 25;
        
        data[i] = grain;     // R
        data[i + 1] = grain; // G
        data[i + 2] = grain; // B
        data[i + 3] = 12;    // A - very low opacity for subtle grain
      }

      ctx.putImageData(imageData, 0, gateWeaveOffset);
    };

    // Animation loop at reduced framerate for performance
    let lastTime = 0;
    const fps = 24; // Cinematic framerate
    const frameInterval = 1000 / fps;

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);

      const delta = currentTime - lastTime;
      if (delta < frameInterval) return;

      lastTime = currentTime - (delta % frameInterval);
      generateNoise();
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Film grain canvas overlay */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 opacity-40 mix-blend-overlay"
        aria-hidden="true"
      />
      
      {/* Grainy gradient background - opalite blue tones */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 50% at 50% 0%,
              rgba(59, 154, 224, 0.15) 0%,
              rgba(10, 35, 64, 0.1) 40%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 60% 40% at 100% 100%,
              rgba(31, 90, 144, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse 40% 30% at 0% 80%,
              rgba(47, 122, 184, 0.08) 0%,
              transparent 50%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Vignette effect for that cinematic edge darkening */}
      <div
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 70% at 50% 50%,
              transparent 0%,
              rgba(0, 0, 0, 0.4) 100%
            )
          `,
        }}
        aria-hidden="true"
      />
    </>
  );
}
