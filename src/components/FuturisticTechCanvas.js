'use client';
import { useEffect, useRef } from 'react';

/**
 * FuturisticTechCanvas
 * High-performance 60fps hardware-accelerated interactive canvas animation.
 * Renders an interactive neural data grid, glowing data nodes, fiber-optic data pulses,
 * binary streams, and high-tech wave telemetry.
 * 100% self-contained, zero external network dependency, plays instantly.
 */
export default function FuturisticTechCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for neural tech network (Balanced authentic original density)
    const NODE_COUNT = Math.min(Math.floor((width * height) / 12000), 55);
    const nodes = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1.2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseVal: Math.random() * Math.PI,
        color: i % 3 === 0 ? '#0284C7' : i % 3 === 1 ? '#2563EB' : '#6366F1',
      });
    }

    // High-tech Data Packets travelling between nodes
    const packets = [];
    const createPacket = () => {
      if (nodes.length < 2) return;
      const startIdx = Math.floor(Math.random() * nodes.length);
      let endIdx = Math.floor(Math.random() * nodes.length);
      while (endIdx === startIdx) {
        endIdx = Math.floor(Math.random() * nodes.length);
      }
      packets.push({
        start: nodes[startIdx],
        end: nodes[endIdx],
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
      });
    };

    // Digital Data Stream Columns
    const streams = [];
    const streamCols = Math.floor(width / 70);
    for (let i = 0; i < streamCols; i++) {
      streams.push({
        x: i * 70 + Math.random() * 20,
        y: Math.random() * height,
        speed: 0.8 + Math.random() * 1.6,
        chars: ['0', '1', 'AI', 'BRVS', '99.9%', 'NET', 'SEC', 'CLOUD', 'DATA'],
        charIdx: 0,
        opacity: 0.15 + Math.random() * 0.25,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Digital Data Streams (Cascading Code Matrix in background)
      ctx.font = '10px "Courier New", monospace';
      streams.forEach((stream) => {
        stream.y += stream.speed;
        if (stream.y > height + 40) {
          stream.y = -20;
          stream.charIdx = (stream.charIdx + 1) % stream.chars.length;
        }
        ctx.fillStyle = `rgba(37, 99, 235, ${stream.opacity * 0.6})`;
        ctx.fillText(stream.chars[stream.charIdx], stream.x, stream.y);
      });

      // 2. Futuristic Sine Wave Telemetry Flow
      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
      for (let x = 0; x < width; x += 6) {
        const y =
          height * 0.52 +
          Math.sin(x * 0.005 + time * 1.2) * 36 +
          Math.cos(x * 0.012 - time * 0.8) * 18;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.28)';
      for (let x = 0; x < width; x += 6) {
        const y =
          height * 0.58 +
          Math.cos(x * 0.006 + time * 1.5) * 44 +
          Math.sin(x * 0.015 - time * 1.1) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 3. Connect nodes with Plexus Neural Lines
      const MAX_DIST = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35;
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // 4. Update & Draw Packets
      if (Math.random() < 0.04 && packets.length < 12) {
        createPacket();
      }

      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k];
        p.progress += p.speed;
        if (p.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }
        const px = p.start.x + (p.end.x - p.start.x) * p.progress;
        const py = p.start.y + (p.end.y - p.start.y) * p.progress;

        ctx.fillStyle = '#38BDF8';
        ctx.shadowColor = '#0284C7';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 5. Update & Draw Neural Nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulseVal += node.pulseSpeed;
        const pulse = Math.sin(node.pulseVal) * 0.5 + 0.5;
        const currentR = node.radius + pulse * 1.2;

        // Outer glow aura
        ctx.fillStyle = `rgba(56, 189, 248, ${0.12 + pulse * 0.15})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentR * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core Node
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentR, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        userSelect: 'none',
        background: 'linear-gradient(180deg, #e8f2fe 0%, #f0f6fe 100%)',
        opacity: 0.98,
        zIndex: 0,
      }}
    />
  );
}
