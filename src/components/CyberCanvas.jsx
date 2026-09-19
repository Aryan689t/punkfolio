import React, { useEffect, useRef } from 'react';

const CyberCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Rainy particle system
    const rainCount = 120;
    const raindrops = [];
    for (let i = 0; i < rainCount; i++) {
      raindrops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 25 + 15,
        speed: Math.random() * 12 + 18,
        opacity: Math.random() * 0.35 + 0.15,
        color: Math.random() > 0.3 ? '#00f0ff' : '#ff007f',
      });
    }

    // Flying cyberpunk spinner vehicles / light trails
    const vehicles = [
      {
        x: -100,
        y: height * 0.22,
        speed: 4.5,
        trailLength: 140,
        color: '#ff007f',
        glow: 'rgba(255, 0, 127, 0.8)',
        size: 3,
        direction: 1,
      },
      {
        x: width + 100,
        y: height * 0.32,
        speed: -3.2,
        trailLength: 120,
        color: '#00f0ff',
        glow: 'rgba(0, 240, 255, 0.8)',
        size: 2.5,
        direction: -1,
      },
      {
        x: -200,
        y: height * 0.15,
        speed: 5.8,
        trailLength: 180,
        color: '#9d00ff',
        glow: 'rgba(157, 0, 255, 0.8)',
        size: 3.5,
        direction: 1,
      },
      {
        x: width + 300,
        y: height * 0.42,
        speed: -4.0,
        trailLength: 150,
        color: '#ff0055',
        glow: 'rgba(255, 0, 85, 0.8)',
        size: 3,
        direction: -1,
      }
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw raindrops
      for (let i = 0; i < rainCount; i++) {
        const drop = raindrops[i];
        ctx.beginPath();
        ctx.strokeStyle = drop.color;
        ctx.globalAlpha = drop.opacity;
        ctx.lineWidth = 1;
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 2, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x -= 1.5;

        if (drop.y > height) {
          drop.y = -drop.length;
          drop.x = Math.random() * (width + 200);
        }
      }

      // Draw flying vehicle light trails
      vehicles.forEach((v) => {
        v.x += v.speed;

        // Reset if off-screen
        if (v.direction === 1 && v.x > width + 250) {
          v.x = -150;
          v.y = Math.random() * (height * 0.4) + height * 0.1;
        } else if (v.direction === -1 && v.x < -250) {
          v.x = width + 150;
          v.y = Math.random() * (height * 0.4) + height * 0.1;
        }

        // Draw light trail gradient
        const grad = ctx.createLinearGradient(
          v.x - v.direction * v.trailLength,
          v.y,
          v.x,
          v.y
        );
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(0.7, v.glow);
        grad.addColorStop(1, '#ffffff');

        ctx.save();
        ctx.shadowColor = v.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = v.size;
        ctx.moveTo(v.x - v.direction * v.trailLength, v.y);
        ctx.lineTo(v.x, v.y);
        ctx.stroke();

        // Vehicle head beacon
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(v.x, v.y, v.size + 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      ctx.globalAlpha = 1.0;
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
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
};

export default CyberCanvas;
