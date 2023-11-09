"use client";

import React, { useRef, useEffect } from "react";

const Particles = () => {
  const canvasRef = useRef(null);
  let animationFrameId: any;

  const drawParticles = () => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particleCount = 3000;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        t: (i * Math.PI * 10) / particleCount,
        speedT: 0.005,
        chaosFactor: Math.random() * 100 - 50, // Random offset to y position
      });
    }

    const baseHelixRadius = 85;
    const frequency = 0.1;
    const amplitude = canvas.height / 5;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.t += particle.speedT;

        const x = (particle.t / (Math.PI * 10)) * canvas.width;
        const y =
          amplitude * Math.sin(frequency * particle.t) +
          canvas.height / 3 +
          particle.chaosFactor;

        const convergenceFactor = Math.sin(particle.t / 2); // Adjust for desired convergence
        const helixRadius =
          baseHelixRadius + Math.abs(particle.chaosFactor / 10); // Adjust helix width based on chaos

        // Draw left helix
        ctx.fillStyle = "#666";
        ctx.beginPath();
        ctx.arc(
          x,
          y + helixRadius * convergenceFactor,
          0.5,
          0,
          Math.PI * 2,
          true
        );
        ctx.closePath();
        ctx.fill();

        // Draw right helix
        ctx.fillStyle = "#444";
        ctx.beginPath();
        ctx.arc(
          x,
          y - helixRadius * convergenceFactor,
          0.5,
          0,
          Math.PI * 2,
          true
        );
        ctx.closePath();
        ctx.fill();

        // Reset particle's position when off right edge
        if (x > canvas.width) {
          particle.t = 0;
          particle.chaosFactor = Math.random() * 100 - 50; // Reset random offset
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    drawParticles();
    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="particles"
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
};

export default Particles;