"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function InteractiveHeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    // Mouse position tracking
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170, // Interaction radius around cursor
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    let particles: Particle[] = [];

    const initParticles = () => {
      // Density-based count for optimal visuals on any screen size
      const count = Math.max(35, Math.min(85, Math.floor((width * height) / 11500)));
      particles = [];

      for (let i = 0; i < count; i++) {
        // Slow velocities for smooth, elegant, serene motion
        const speed = 0.25 + Math.random() * 0.35;
        const angle = Math.random() * Math.PI * 2;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.6 + Math.random() * 1.6, // Small dots
          color: Math.random() > 0.4 ? "rgba(37, 99, 235, " : "rgba(59, 130, 246, ", // Brand blue hues
        });
      }
    };

    initParticles();

    const maxDistance = 125; // Distance to connect dots with thin lines

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient gradient background glow
      const bgGrad = ctx.createRadialGradient(
        width * 0.4,
        height * 0.45,
        50,
        width * 0.4,
        height * 0.45,
        width * 0.6
      );
      bgGrad.addColorStop(0, "rgba(239, 246, 255, 0.55)"); // very soft ice-blue tint
      bgGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Update positions & draw lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle slowly
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce gently at edges
        if (p1.x <= 0 || p1.x >= width) p1.vx *= -1;
        if (p1.y <= 0 || p1.y >= height) p1.vy *= -1;

        // Mouse gentle magnetic repulsion/interaction
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x -= (dxMouse / distMouse) * force * 1.2;
          p1.y -= (dyMouse / distMouse) * force * 1.2;

          // Connect dot to cursor with thin glowing line
          const lineAlpha = (1 - distMouse / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Connect p1 to other particles p2
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22; // Thin subtle line
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.75; // Thin lines
            ctx.stroke();
          }
        }

        // Draw small dot (particle)
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color + "0.75)";
        ctx.fill();

        // Very faint subtle glow halo for slightly larger dots
        if (p1.radius > 2.3) {
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = p1.color + "0.12)";
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
