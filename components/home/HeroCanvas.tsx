"use client";

import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  hue: number;
};

function createBlobs(width: number, height: number, count: number): Blob[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.min(width, height) * (0.18 + Math.random() * 0.22),
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    hue: 18 + Math.random() * 28,
  }));
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let blobs: Blob[] = [];
    let pointer = { x: 0, y: 0, active: false };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      blobs = createBlobs(width, height, 4);
    };

    const drawStatic = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#17130f");
      gradient.addColorStop(0.5, "#2a2118");
      gradient.addColorStop(1, "#120f0c");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();

      ctx.fillStyle = "#0f0d0b";
      ctx.fillRect(0, 0, width, height);

      for (const blob of blobs) {
        if (!reducedMotionRef.current) {
          blob.x += blob.vx;
          blob.y += blob.vy;

          if (blob.x < -blob.radius) blob.x = width + blob.radius;
          if (blob.x > width + blob.radius) blob.x = -blob.radius;
          if (blob.y < -blob.radius) blob.y = height + blob.radius;
          if (blob.y > height + blob.radius) blob.y = -blob.radius;

          if (pointer.active) {
            blob.x += (pointer.x - blob.x) * 0.0025;
            blob.y += (pointer.y - blob.y) * 0.0025;
          }
        }

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius,
        );
        gradient.addColorStop(0, `hsla(${blob.hue}, 28%, 42%, 0.35)`);
        gradient.addColorStop(1, "hsla(24, 18%, 12%, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.2,
        width / 2,
        height / 2,
        width * 0.75,
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      if (!reducedMotionRef.current) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    if (reducedMotionRef.current) {
      drawStatic();
    } else {
      draw();
    }

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
