"use client";
import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const color = "#8affdb";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const spacing = 42; // base grid spacing
    const amplitude = 12; // wave height
    const speedA = 0.0014;
    const speedB = 0.0019;
    const fxA = 0.32;
    const fyA = 0.26;
    const fxB = 0.18;
    const fyB = 0.22;
    const seedA = 384.21; // deterministic seeds to keep grid coherent
    const seedB = 912.77;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.45;

      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;


      for (let y = -1; y < rows; y++) {
        for (let x = -1; x < cols; x++) {
          const baseX = x * spacing;
          const baseY = y * spacing;
          const waveA = Math.sin(baseX * fxA + baseY * fyA + time * speedA + seedA);
          const waveB = Math.cos(baseX * fxB - baseY * fyB + time * speedB + seedB);
          const wave = (waveA + waveB) * amplitude; // offsets only, base grid remains fixed by spacing
          const px = baseX;
          const py = baseY + wave;

          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    animationFrame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
}
