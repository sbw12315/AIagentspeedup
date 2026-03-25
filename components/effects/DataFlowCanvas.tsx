"use client";

import { useEffect, useRef, useCallback } from "react";

interface DataFlowCanvasProps {
  className?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulsePhase: number;
}

interface FlowLine {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  opacity: number;
  color: string;
}

export function DataFlowCanvas({ className = "" }: DataFlowCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const flowLinesRef = useRef<FlowLine[]>([]);

  const initNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const nodeCount = Math.floor((width * height) / 15000);

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? "#06b6d4" : "#8b5cf6",
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    return nodes;
  }, []);

  const initFlowLines = useCallback((width: number, height: number) => {
    const lines: FlowLine[] = [];
    const lineCount = Math.floor((width * height) / 80000);

    for (let i = 0; i < lineCount; i++) {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * 100 + 50;

      lines.push({
        startX,
        startY,
        endX: startX + Math.cos(angle) * length,
        endY: startY + Math.sin(angle) * length,
        progress: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? "#06b6d4" : "#8b5cf6",
      });
    }
    return lines;
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear canvas
    ctx.fillStyle = "rgba(10, 15, 26, 0.1)";
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = "rgba(30, 41, 59, 0.3)";
    ctx.lineWidth = 1;
    const gridSize = 50;

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw flow lines
    const flowLines = flowLinesRef.current;
    flowLines.forEach((line) => {
      const dx = line.endX - line.startX;
      const dy = line.endY - line.startY;

      const currentX = line.startX + dx * line.progress;
      const currentY = line.startY + dy * line.progress;

      ctx.beginPath();
      ctx.moveTo(line.startX, line.startY);
      ctx.lineTo(currentX, currentY);

      const gradient = ctx.createLinearGradient(line.startX, line.startY, currentX, currentY);
      gradient.addColorStop(0, `rgba(6, 182, 212, 0)`);
      gradient.addColorStop(0.5, `rgba(6, 182, 212, ${line.opacity})`);
      gradient.addColorStop(1, `rgba(139, 92, 246, ${line.opacity})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Update progress
      line.progress += line.speed;
      if (line.progress > 1) {
        line.progress = 0;
        const angle = Math.random() * Math.PI * 2;
        const length = Math.random() * 100 + 50;
        line.startX = Math.random() * width;
        line.startY = Math.random() * height;
        line.endX = line.startX + Math.cos(angle) * length;
        line.endY = line.startY + Math.sin(angle) * length;
      }
    });

    // Draw nodes
    const nodes = nodesRef.current;
    const time = Date.now() * 0.001;

    nodes.forEach((node) => {
      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Pulse effect
      const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
      const radius = node.radius * (1 + pulse * 0.3);

      // Draw glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 4);
      gradient.addColorStop(0, node.color + "40");
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);

      nodesRef.current = initNodes(rect.width, rect.height);
      flowLinesRef.current = initFlowLines(rect.width, rect.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lastTime = 0;
    const animate = (currentTime: number) => {
      if (currentTime - lastTime > 16) {
        const parent = canvas.parentElement;
        if (parent) {
          const rect = parent.getBoundingClientRect();
          draw(ctx, rect.width, rect.height);
        }
        lastTime = currentTime;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw, initNodes, initFlowLines]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
