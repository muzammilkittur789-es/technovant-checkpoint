"use client";

import React, { useEffect, useRef } from "react";

interface Pulse {
  type: "vertical" | "horizontal";
  lineCoord: number; // fixed coordinate: x for vertical, y for horizontal
  progress: number;  // 0 to 1 along the line
  speed: number;
  length: number;    // pulse length in pixels
  direction: 1 | -1; // 1 = forward, -1 = reverse
  color: string;
  dotColor: string;
  isIdle: boolean;
  idleTimer: number; // frames before respawning
}

export default function Digital3DGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking with smooth lerp
    const mouse = {
      x: -1000,
      y: -1000,
      isHovered: false,
    };

    // Smoothed indentation coordinates and depth intensity
    const cursor = {
      x: -1000,
      y: -1000,
      depth: 0,        // 0 (flat) to 1 (full indentation)
      targetDepth: 0,
    };

    const handleWindowMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      // Check if pointer is within the hero section
      if (relX >= 0 && relX <= rect.width && relY >= 0 && relY <= rect.height) {
        mouse.x = relX;
        mouse.y = relY;
        mouse.isHovered = true;
        cursor.targetDepth = 1;

        if (cursor.x < -500) {
          cursor.x = mouse.x;
          cursor.y = mouse.y;
        }
      } else {
        mouse.isHovered = false;
        cursor.targetDepth = 0; // Smoothly spring back to flat 2D
      }
    };

    const handleWindowMouseLeave = () => {
      mouse.isHovered = false;
      cursor.targetDepth = 0;
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("blur", handleWindowMouseLeave);
    document.addEventListener("mouseleave", handleWindowMouseLeave);

    // Grid configuration: Clean Flat 2D Orthogonal Grid
    const gridSize = 48; // Crisp 48px square cells
    
    // Tightly localized radius: primarily affects the active grid cell
    // with a gentle tapering effect on the immediate 8 surrounding grid cells (~1.7x gridSize)
    const depressionRadius = 82; 
    const maxDisplacement = 14;  // Subtle inward pull in pixels for localized indentation

    // Inward deformation function: pulls points inward towards cursor to simulate concave depth
    const deform = (x: number, y: number) => {
      if (cursor.depth <= 0.001) {
        return { x, y, dist: 9999, depthFactor: 0 };
      }

      const dx = cursor.x - x;
      const dy = cursor.y - y;
      const dist = Math.hypot(dx, dy);

      if (dist >= depressionRadius || dist === 0) {
        return { x, y, dist, depthFactor: 0 };
      }

      const s = dist / depressionRadius; // 0 at cursor, 1 at edge of the 8 surrounding cells
      // Smooth bell curve with 0 slope at s=0 and s=1
      const factor = Math.sin(Math.PI * s) * (1 - 0.2 * s);
      const disp = maxDisplacement * factor * cursor.depth;

      return {
        x: x + (dx / dist) * disp,
        y: y + (dy / dist) * disp,
        dist,
        depthFactor: (1 - s) * cursor.depth,
      };
    };

    // Enterprise subtle cloud / AI pulse colors
    const pulseColors = [
      { stroke: "rgba(37, 99, 235, ", dot: "rgba(37, 99, 235, 0.7)" },
      { stroke: "rgba(14, 165, 233, ", dot: "rgba(14, 165, 233, 0.7)" },
      { stroke: "rgba(79, 70, 229, ",  dot: "rgba(99, 102, 241, 0.7)" },
    ];

    // Occasional thin light pulses traveling along grid lines
    const pulses: Pulse[] = [];
    const createPulse = (index: number): Pulse => {
      const isVert = Math.random() > 0.5;
      const palette = pulseColors[index % pulseColors.length];

      let lineCoord = 0;
      if (isVert) {
        const numLines = Math.floor(width / gridSize);
        const col = Math.floor(Math.random() * (numLines - 2)) + 1;
        lineCoord = col * gridSize;
      } else {
        const numLines = Math.floor(height / gridSize);
        const row = Math.floor(Math.random() * (numLines - 2)) + 1;
        lineCoord = row * gridSize;
      }

      return {
        type: isVert ? "vertical" : "horizontal",
        lineCoord,
        progress: Math.random() * 0.7,
        speed: 0.0028 + Math.random() * 0.0020,
        length: 50 + Math.random() * 40, // Length in px
        direction: Math.random() > 0.4 ? 1 : -1,
        color: palette.stroke,
        dotColor: palette.dot,
        isIdle: false,
        idleTimer: 0,
      };
    };

    for (let i = 0; i < 5; i++) {
      pulses.push(createPulse(i));
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth cursor lerping
      if (mouse.isHovered) {
        cursor.x += (mouse.x - cursor.x) * 0.15;
        cursor.y += (mouse.y - cursor.y) * 0.15;
      }
      cursor.depth += (cursor.targetDepth - cursor.depth) * 0.1;

      // Note: No pointer circle or circular contour rings are drawn here per user specification.
      // The effect is purely expressed through the subtle inward curvature of the grid lines themselves.

      // 1. Draw Vertical Flat 2D Grid Lines (Deforming inward only at active cell & surrounding 8 cells)
      const numCols = Math.ceil(width / gridSize) + 1;
      const vStep = 6; // Fine sampling step for smooth localized curve

      for (let c = 0; c <= numCols; c++) {
        const x = c * gridSize;

        const isNearCursor = cursor.depth > 0.01 && Math.abs(x - cursor.x) < depressionRadius;

        ctx.beginPath();
        if (!isNearCursor) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.strokeStyle = "rgba(100, 116, 139, 0.065)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          let hasStarted = false;
          let maxGlow = 0;

          for (let y = 0; y <= height + vStep; y += vStep) {
            const p = deform(x, Math.min(y, height));
            if (!hasStarted) {
              ctx.moveTo(p.x, p.y);
              hasStarted = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
            if (p.depthFactor > maxGlow) {
              maxGlow = p.depthFactor;
            }
          }

          // Subtle illumination on the indented lines
          const alpha = 0.065 + maxGlow * 0.14;
          ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
          ctx.lineWidth = 0.85 + maxGlow * 0.25;
          ctx.stroke();
        }
      }

      // 2. Draw Horizontal Flat 2D Grid Lines (Deforming inward only at active cell & surrounding 8 cells)
      const numRows = Math.ceil(height / gridSize) + 1;
      const hStep = 6;

      for (let r = 0; r <= numRows; r++) {
        const y = r * gridSize;

        const isNearCursor = cursor.depth > 0.01 && Math.abs(y - cursor.y) < depressionRadius;

        ctx.beginPath();
        if (!isNearCursor) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.strokeStyle = "rgba(100, 116, 139, 0.065)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          let hasStarted = false;
          let maxGlow = 0;

          for (let x = 0; x <= width + hStep; x += hStep) {
            const p = deform(Math.min(x, width), y);
            if (!hasStarted) {
              ctx.moveTo(p.x, p.y);
              hasStarted = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
            if (p.depthFactor > maxGlow) {
              maxGlow = p.depthFactor;
            }
          }

          const alpha = 0.065 + maxGlow * 0.14;
          ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
          ctx.lineWidth = 0.85 + maxGlow * 0.25;
          ctx.stroke();
        }
      }

      // 3. Draw Discrete Intersection Nodes
      for (let c = 1; c < numCols; c++) {
        const x = c * gridSize;
        for (let r = 1; r < numRows; r++) {
          const y = r * gridSize;
          const p = deform(x, y);

          if (p.depthFactor > 0.05) {
            // Interactive glowing node inside the depressed cell / surrounding 8 cells
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.1 + p.depthFactor * 1.1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(37, 99, 235, ${0.14 + p.depthFactor * 0.4})`;
            ctx.fill();
          } else {
            // Resting subtle node
            ctx.beginPath();
            ctx.arc(p.x, p.y, 0.85, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(148, 163, 184, 0.12)";
            ctx.fill();
          }
        }
      }

      // 4. Draw Occasional Thin Light Pulses
      for (let i = 0; i < pulses.length; i++) {
        const pulse = pulses[i];

        if (pulse.isIdle) {
          pulse.idleTimer--;
          if (pulse.idleTimer <= 0) {
            pulse.isIdle = false;
            pulse.type = Math.random() > 0.5 ? "vertical" : "horizontal";
            pulse.direction = Math.random() > 0.4 ? 1 : -1;
            pulse.progress = pulse.direction === 1 ? 0 : 1;
            pulse.speed = 0.0028 + Math.random() * 0.0020;

            if (pulse.type === "vertical") {
              const numLines = Math.floor(width / gridSize);
              const col = Math.floor(Math.random() * (numLines - 2)) + 1;
              pulse.lineCoord = col * gridSize;
            } else {
              const numLines = Math.floor(height / gridSize);
              const row = Math.floor(Math.random() * (numLines - 2)) + 1;
              pulse.lineCoord = row * gridSize;
            }
          }
          continue;
        }

        pulse.progress += pulse.speed * pulse.direction;

        if (
          (pulse.direction === 1 && pulse.progress >= 1.05) ||
          (pulse.direction === -1 && pulse.progress <= -0.05)
        ) {
          pulse.isIdle = true;
          pulse.idleTimer = 35 + Math.floor(Math.random() * 75);
          continue;
        }

        const maxSpan = pulse.type === "vertical" ? height : width;
        const headPixel = pulse.progress * maxSpan;
        const tailPixel = headPixel - pulse.length * pulse.direction;

        const numSegments = 10;
        const pulsePoints: { x: number; y: number }[] = [];

        for (let s = 0; s <= numSegments; s++) {
          const t = s / numSegments;
          const currentPixel = tailPixel + (headPixel - tailPixel) * t;
          let px = 0;
          let py = 0;

          if (pulse.type === "vertical") {
            px = pulse.lineCoord;
            py = currentPixel;
          } else {
            px = currentPixel;
            py = pulse.lineCoord;
          }

          const deformed = deform(px, py);
          pulsePoints.push({ x: deformed.x, y: deformed.y });
        }

        const headPoint = pulsePoints[pulsePoints.length - 1];
        const tailPoint = pulsePoints[0];

        const boundaryNorm = Math.min(pulse.progress, 1 - pulse.progress) * 4;
        const pulseAlpha = Math.max(0, Math.min(0.48, boundaryNorm * 0.48));

        if (pulseAlpha <= 0.02) continue;

        const pGrad = ctx.createLinearGradient(
          tailPoint.x,
          tailPoint.y,
          headPoint.x,
          headPoint.y
        );
        pGrad.addColorStop(0, `${pulse.color}0)`);
        pGrad.addColorStop(0.65, `${pulse.color}${pulseAlpha * 0.5})`);
        pGrad.addColorStop(1, `${pulse.color}${pulseAlpha})`);

        ctx.beginPath();
        ctx.moveTo(pulsePoints[0].x, pulsePoints[0].y);
        for (let s = 1; s < pulsePoints.length; s++) {
          ctx.lineTo(pulsePoints[s].x, pulsePoints[s].y);
        }
        ctx.strokeStyle = pGrad;
        ctx.lineWidth = 1.35;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(headPoint.x, headPoint.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = pulse.dotColor;
        ctx.shadowColor = "#3b82f6";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("blur", handleWindowMouseLeave);
      document.removeEventListener("mouseleave", handleWindowMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full select-none"
    />
  );
}
