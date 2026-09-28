"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

interface DataPulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export default function NetworkConstellation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || 600;

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initNetwork();
    };

    let nodes: Node[] = [];
    let pulses: DataPulse[] = [];
    const maxConnectionDistance = 115; // Max distance for connection lines

    const initNetwork = () => {
      nodes = [];
      // Clean, uncluttered density
      const nodeCount = Math.max(30, Math.min(65, Math.floor((width * height) / 14000)));

      for (let i = 0; i < nodeCount; i++) {
        // Very slow, serene velocity (0.04 to 0.12 px/frame)
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.05 + Math.random() * 0.08;

        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.1 + Math.random() * 0.7, // Delicate small dots (1.1px - 1.8px)
          alpha: 0.25 + Math.random() * 0.2,  // Faint opacity
        });
      }

      // Initialize 5-7 subtle data flow pulses
      pulses = [];
      for (let p = 0; p < 6; p++) {
        pulses.push({
          fromNode: Math.floor(Math.random() * nodeCount),
          toNode: Math.floor(Math.random() * nodeCount),
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.003, // Slow, peaceful travel speed
        });
      }
    };

    // Soft, non-intrusive mouse influence
    const mouse = { x: -2000, y: -2000, radius: 130 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const activeConnections: { i: number; j: number; dist: number }[] = [];

      // 1. Update node positions with slow, meditative drift
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Wrap around borders softly
        if (n.x < -15) n.x = width + 15;
        else if (n.x > width + 15) n.x = -15;

        if (n.y < -15) n.y = height + 15;
        else if (n.y > height + 15) n.y = -15;

        // Very gentle mouse avoidance (smooth, not jumpy)
        const dxM = mouse.x - n.x;
        const dyM = mouse.y - n.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distM < mouse.radius) {
          const force = (mouse.radius - distM) / mouse.radius;
          n.x -= (dxM / distM) * force * 0.35;
          n.y -= (dyM / distM) * force * 0.35;
        }

        // Find connections to neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            activeConnections.push({ i, j, dist });

            // Thin, low-opacity line (max opacity around 0.12)
            const lineOpacity = (1 - dist / maxConnectionDistance) * 0.13;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(71, 85, 105, ${lineOpacity})`; // Slate-600 subtle stroke
            ctx.lineWidth = 0.6; // Thin line
            ctx.stroke();
          }
        }
      }

      // 2. Slow-moving data pulses traveling along active connection lines
      for (let p = 0; p < pulses.length; p++) {
        const pulse = pulses[p];
        const nA = nodes[pulse.fromNode];
        const nB = nodes[pulse.toNode];

        if (nA && nB) {
          const dx = nB.x - nA.x;
          const dy = nB.y - nA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // If nodes are within range, advance the pulse
          if (dist < maxConnectionDistance * 1.25) {
            pulse.progress += pulse.speed;

            if (pulse.progress >= 1) {
              // Pulse reached destination; pick a new destination from active connections
              pulse.progress = 0;
              pulse.fromNode = pulse.toNode;
              const neighbors = activeConnections.filter(c => c.i === pulse.fromNode || c.j === pulse.fromNode);
              if (neighbors.length > 0) {
                const chosen = neighbors[Math.floor(Math.random() * neighbors.length)];
                pulse.toNode = chosen.i === pulse.fromNode ? chosen.j : chosen.i;
              } else {
                pulse.toNode = Math.floor(Math.random() * nodes.length);
              }
            } else {
              // Draw small, faint data pulse (light point)
              const px = nA.x + dx * pulse.progress;
              const py = nA.y + dy * pulse.progress;

              ctx.beginPath();
              ctx.arc(px, py, 1.3, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(59, 130, 246, 0.45)"; // Soft blue data point
              ctx.fill();
            }
          } else {
            // Pick a new pair from active connections
            if (activeConnections.length > 0) {
              const pair = activeConnections[Math.floor(Math.random() * activeConnections.length)];
              pulse.fromNode = pair.i;
              pulse.toNode = pair.j;
              pulse.progress = 0;
            }
          }
        }
      }

      // 3. Draw small, faint nodes (dots)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        // Faint slate/blue hue that blends smoothly into white background
        ctx.fillStyle = `rgba(100, 116, 139, ${n.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full select-none"
    />
  );
}
