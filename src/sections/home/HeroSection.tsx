import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    // Simplified fluid-like particle animation using Canvas 2D
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Flow field particles
    const particles: { x: number; y: number; vx: number; vy: number; life: number; size: number }[] = [];
    const numParticles = 80;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: 0,
        vy: 0,
        life: Math.random(),
        size: 1 + Math.random() * 2,
      });
    }

    const noise = (x: number, y: number, t: number) => {
      return Math.sin(x * 0.003 + t) * Math.cos(y * 0.003 + t * 0.7) +
             Math.sin(x * 0.007 - t * 0.5) * 0.5 +
             Math.cos((x + y) * 0.005 + t * 0.3) * 0.5;
    };

    const draw = () => {
      time += 0.008;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Fade trail
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        const angle = noise(p.x, p.y, time) * Math.PI * 2;
        p.vx += Math.cos(angle) * 0.15;
        p.vy += Math.sin(angle) * 0.15;
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.005;

        // Wrap
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Draw with gold color
        const alpha = 0.3 + Math.sin(p.life * Math.PI * 2) * 0.2;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 184, 0, ${alpha})`;
        ctx.fill();

        // Trail line
        if (speed > 0.5) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 8, p.y - p.vy * 8);
          ctx.strokeStyle = `rgba(255, 184, 0, ${alpha * 0.3})`;
          ctx.lineWidth = p.size * 0.5;
          ctx.stroke();
        }
      });

      // Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 184, 0, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    ctx.fillStyle = '#0A0A0A';
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const headlineWords = 'Intelligent infrastructure for the digital economy'.split(' ');

  return (
    <section className="relative min-h-[100dvh] bg-coz-black pt-[72px] overflow-hidden">
      {/* Animated canvas background */}
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.7 }}
        />
      ) : (
        <img
          src="/images/hero-fallback.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      )}

      <div className="relative z-10 max-w-content-wide mx-auto px-6 pt-[clamp(80px,12vh,160px)] pb-[clamp(64px,8vh,120px)] min-h-[100dvh] flex items-center">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center w-full">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mb-6"
            >
              <span className="text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-gold-light text-coz-gold-dark">
                Global Technology Company
              </span>
            </motion.div>

            <h1 className="text-display text-white mb-8">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-body-lg text-coz-slate-light max-w-[540px]"
            >
              Cozanet builds the products, platforms, and protocols that power intelligent software, financial infrastructure, and automation across the global digital economy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                to="/products"
                className="inline-flex items-center px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium text-[0.9375rem] hover:shadow-gold-glow hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Products
              </Link>
              <Link
                to="/company"
                className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border-dark text-white font-medium text-[0.9375rem] hover:border-coz-slate-light transition-all duration-200"
              >
                Learn About Cozanet
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-x-8 gap-y-4 mt-14"
            >
              {[
                { number: '6+', label: 'Products' },
                { number: '3', label: 'Core Platforms' },
                { number: 'Global', label: 'Infrastructure' },
                { number: '24/7', label: 'Reliability' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
                >
                  <div className="text-h3 text-white font-semibold">{stat.number}</div>
                  <div className="text-[0.875rem] text-coz-slate">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Hero visual area - the canvas fills this */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative h-[500px]"
          >
            {/* Canvas particles render here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
