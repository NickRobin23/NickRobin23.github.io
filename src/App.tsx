import { useEffect, useRef } from "react";

const REFLECTION = {
  title: "Privatio Boni: A Visual Meditation on Evil as Absence",
  studentInfo: "Problem of Evil — Creative Response",
  body: [
    `The idea for my project developed from thinking about how evil is not always something obvious or external, but instead something that can exist through absence. When I first read On the Nature of Evil by Thomas Aquinas, His argument that evil is not a “thing” in itself, but rather a lack or privation of good, stood out to me. This concept felt different from how evil is usually portrayed in both the media and everyday life, where it is often shown as something powerful and active. For my project, I wanted to visually represent this idea by focusing on absence rather than presence. Instead of creating something that directly shows evil as a force, I tried to show what happens when something good is missing.`,
    `My starting point was to figure out a visual or conceptual way to represent "absence". Contrast was always there in my mind as a major theme. If good is there, it is clear to see, but when it is taken away, the remaining can feel empty or even distorted. That is how I arrived at basing my project on the interaction of light and darkness, with the darkness not necessarily being something added, but something that exists because the light is absent. You can see in the background, the dots of gold light fade in and out in the darkness. This is in direct agreement with Aquinas's point that "evil is the privation of good" (Aquinas). Essentially, what I tried to do in my project was to make the audience realize that the shady or unpleasant sections are not objects in their own right but are just gaps where something should be but is not.`,
    `Talking of the development of the project, I started considering how such a concept can be applied to life. On the one hand, it also fits well with Aquinas's line of thought where evil deeds are not formed out of nothingness but instead result from the lack of a certain goodness such as justice or compassion or reason, etc. My intention was to have my project demonstrate this by rendering the "negative" spaces as lacking or incomplete rather than forceful or hostile.`,
    `It really did challenge my creativity to some extent when I tried to make sure the meaning of the entire artwork was easily understood and yet I did not use too much explanatory text. Since Aquinas's thought can be rather heavy and difficult to translate into artwork or the like, I was initially inclined to include clear symbols of good and evil and this, however, made the whole thing feel too simple and also the exact opposite of what the text was about. Eventually, I came to the conclusion that if I portrayed evil as a complete entity, I would be going against Aquinas's position. Consequently, I eliminated some of those aspects and relied more on subtlety. In addition to making the work much better aligned with the reading, this also forced me to depend on the viewer to interact with it and therefore to think more deeply about their experience of it.`,
    `It was another reason I focused on the user's viewpoint and asked myself how the person would interpret the whole situation. My hope was to get the audience to engage with the project in such a way that it is almost disturbing and yet unfinished and this then leads the spectator to ask why some of the parts are "off". The philosophical point being made here is that if good is not there, then it is this which somehow makes us feel that something is wrong, even if we cannot promptly put our finger on the reason. Aquinas demonstrates that all things are good to some extent and that evil only arises where that goodness is degraded (Aquinas). By producing some disharmony, it was my intention to represent that sensation and to motivate people to think about which elements might be lacking.`,
    `In a nutshell, this work gave me a chance to read up on Aquinas's points of view on evil and it also made me see it differently. Where formerly I had thought of evil as a tremendously powerful force, I realized that it is actually a consequence of the absence of good. My changed mindset affected the very idea and the making of the piece. Visualization of a philosophically abstract notion without resorting to straightforward representation involved countless trials and errors, a reality that I could not avoid in the process of going from a concept to a piece of art. Ultimately, I am convinced that this work is a faithful illustration of Aquinas's point of view by revealing that what most of us call "evil" is often simply the lack of something rather than the presence of something.`,
  ],
  works: [
    `Aquinas, Thomas. On the Nature of Evil. University of Notre Dame Press, 1995.`,
  ],
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  type: "ember" | "wisp" | "smoke" | "orb";
  ax?: number;
  ay?: number;
  wobble?: number;
  wobbleSpeed?: number;
}

interface RainDrop {
  x: number;
  y: number;
  len: number;
  speed: number;
  alpha: number;
}

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rainRef = useRef<RainDrop[]>([]);
  const animRef = useRef<number>(0);
  const scrollYRef = useRef<number>(0);
  const smoothScrollRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const container = containerRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      rainRef.current = [];
      const count = Math.floor((canvas.width * canvas.height) / 4200);
      for (let i = 0; i < count; i++) {
        rainRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          len: 8 + Math.random() * 16,
          speed: 7 + Math.random() * 9,
          alpha: 0.04 + Math.random() * 0.1,
        });
      }
    };
    resize();
    window.addEventListener("resize", resize);

    // Custom smooth scroll: intercept wheel + touch, animate scroll ourselves
    let targetScroll = 0;
    let isScrolling = false;

    const getMaxScroll = () => container.scrollHeight - window.innerHeight;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetScroll = Math.max(0, Math.min(getMaxScroll(), targetScroll + e.deltaY));
      if (!isScrolling) animateScroll();
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const delta = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      targetScroll = Math.max(0, Math.min(getMaxScroll(), targetScroll + delta));
      if (!isScrolling) animateScroll();
    };

    const animateScroll = () => {
      isScrolling = true;
      const step = () => {
        const diff = targetScroll - scrollYRef.current;
        if (Math.abs(diff) < 0.5) {
          scrollYRef.current = targetScroll;
          container.scrollTop = targetScroll;
          isScrolling = false;
          return;
        }
        scrollYRef.current += diff * 0.09;
        container.scrollTop = scrollYRef.current;
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });

    const spawnParticle = () => {
      const edge = Math.random();
      let x: number, y: number;

      if (edge < 0.5) {
        x = Math.random() * canvas.width;
        y = canvas.height + 10;
      } else if (edge < 0.7) {
        x = -10;
        y = canvas.height * 0.4 + Math.random() * canvas.height * 0.6;
      } else {
        x = canvas.width + 10;
        y = canvas.height * 0.4 + Math.random() * canvas.height * 0.6;
      }

      const type = Math.random() < 0.35 ? "ember" : Math.random() < 0.55 ? "wisp" : "smoke";
      const maxLife = type === "smoke" ? 180 + Math.random() * 120 : 120 + Math.random() * 80;

      particlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * (type === "smoke" ? 0.4 : 0.8),
        vy: -(0.3 + Math.random() * (type === "ember" ? 1.2 : 0.6)),
        life: maxLife,
        maxLife,
        size: type === "smoke" ? 40 + Math.random() * 60 : type === "wisp" ? 6 + Math.random() * 10 : 2 + Math.random() * 3,
        type,
      });
    };

    const spawnOrb = () => {
      // spawn from edges or corners
      const side = Math.floor(Math.random() * 4);
      let x: number, y: number;
      if (side === 0) { x = Math.random() * canvas.width; y = -20; }
      else if (side === 1) { x = canvas.width + 20; y = Math.random() * canvas.height; }
      else if (side === 2) { x = Math.random() * canvas.width; y = canvas.height + 20; }
      else { x = -20; y = Math.random() * canvas.height; }

      const speed = 0.5 + Math.random() * 1.2;
      const angle = Math.random() * Math.PI * 2;
      const maxLife = 300 + Math.random() * 300;

      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        ax: 0,
        ay: 0,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.02 + Math.random() * 0.03,
        life: maxLife,
        maxLife,
        size: 5 + Math.random() * 9,
        type: "orb",
      });
    };

    let frame = 0;
    const tick = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // smoothly lerp the parallax offset
      smoothScrollRef.current += (scrollYRef.current - smoothScrollRef.current) * 0.06;
      const parallax = smoothScrollRef.current * 0.18;
      ctx.save();
      ctx.translate(0, parallax);

      // spawn
      if (frame % 3 === 0) spawnParticle();
      if (frame % 8 === 0) spawnParticle();
      if (frame % 40 === 0) spawnOrb();
      if (frame % 70 === 0) spawnOrb();

      // corner darkness vignette pulses (drawn on canvas but subtle)
      const t = frame * 0.01;
      const pulse = 0.12 + Math.sin(t) * 0.03;
      const vg = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.15,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.9
      );
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, `rgba(0,0,0,${pulse})`);
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // draw rain
      ctx.save();
      for (const r of rainRef.current) {
        r.y += r.speed;
        r.x -= r.speed * 0.18; // slight wind angle
        if (r.y > canvas.height + r.len) {
          r.y = -r.len;
          r.x = Math.random() * canvas.width;
        }
        if (r.x < -10) r.x = canvas.width + Math.random() * 60;
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x - r.len * 0.18, r.y + r.len);
        ctx.strokeStyle = `rgba(140,160,180,${r.alpha})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
      ctx.restore();

      // draw particles
      const alive: Particle[] = [];
      for (const p of particlesRef.current) {
        p.life--;
        if (p.life <= 0) continue;
        alive.push(p);

        p.x += p.vx;
        p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.05;

        const progress = p.life / p.maxLife;

        if (p.type === "ember") {
          const alpha = progress < 0.2 ? progress / 0.2 : progress;
          const r = 200 + Math.floor(Math.random() * 30);
          const g = 60 + Math.floor(progress * 80);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (0.5 + progress * 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},20,${alpha * 0.7})`;
          ctx.fill();
          // glow
          const eg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
          eg.addColorStop(0, `rgba(220,80,10,${alpha * 0.18})`);
          eg.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = eg;
          ctx.fill();
        } else if (p.type === "wisp") {
          const alpha = progress < 0.15 ? progress / 0.15 : progress * 0.6;
          const wg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
          wg.addColorStop(0, `rgba(160,80,200,${alpha * 0.25})`);
          wg.addColorStop(0.4, `rgba(80,20,120,${alpha * 0.12})`);
          wg.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = wg;
          ctx.fill();
        } else if (p.type === "smoke") {
          const alpha = progress < 0.1 ? progress / 0.1 * 0.06 : progress > 0.8 ? (1 - progress) / 0.2 * 0.06 : 0.06;
          const sg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          sg.addColorStop(0, `rgba(15,10,20,${alpha})`);
          sg.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = sg;
          ctx.fill();
          p.size += 0.15;
        } else if (p.type === "orb") {
          // gentle drifting motion with wobble
          p.wobble! += p.wobbleSpeed!;
          p.vx += Math.cos(p.wobble!) * 0.018;
          p.vy += Math.sin(p.wobble! * 0.7) * 0.018;
          // soft speed cap
          const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (spd > 1.8) { p.vx *= 1.8 / spd; p.vy *= 1.8 / spd; }

          const fadeIn = progress < 0.12 ? progress / 0.12 : 1;
          const fadeOut = progress < 0.15 ? 1 : progress;
          const alpha = fadeIn * fadeOut;

          // large soft glow
          const glowR = p.size * 14;
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
          glow.addColorStop(0,   `rgba(255,230,80,${alpha * 0.22})`);
          glow.addColorStop(0.25,`rgba(255,190,30,${alpha * 0.12})`);
          glow.addColorStop(0.6, `rgba(200,120,10,${alpha * 0.05})`);
          glow.addColorStop(1,   "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          // medium halo
          const haloR = p.size * 5;
          const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR);
          halo.addColorStop(0,   `rgba(255,245,160,${alpha * 0.55})`);
          halo.addColorStop(0.5, `rgba(255,210,60,${alpha * 0.3})`);
          halo.addColorStop(1,   "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();

          // bright core
          const core = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          core.addColorStop(0,   `rgba(255,255,230,${alpha * 0.95})`);
          core.addColorStop(0.6, `rgba(255,230,100,${alpha * 0.7})`);
          core.addColorStop(1,   `rgba(255,180,20,${alpha * 0.3})`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = core;
          ctx.fill();
        }
      }
      particlesRef.current = alive;

      ctx.restore(); // end parallax transform

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#080608]"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif", overscrollBehavior: "none" }}
    >
      {/* Background canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />

      {/* Vignette overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Content */}
      <main className="relative z-20 max-w-[680px] mx-auto px-6 py-16 pb-24" style={{ minHeight: "100vh" }}>
        {/* Header block */}
        <div className="mb-12 text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-stone-600 mb-3">
            {REFLECTION.studentInfo}
          </p>
          <h1
            className="text-3xl font-normal text-stone-200 leading-snug mb-1"
            style={{ letterSpacing: "0.01em" }}
          >
            {REFLECTION.title}
          </h1>
          <div className="mt-5 mx-auto w-16 h-px bg-stone-700" />
        </div>

        {/* Body paragraphs */}
        <div className="space-y-6">
          {REFLECTION.body.map((para, i) => (
            <p
              key={i}
              className="text-stone-300 leading-[1.85] text-[0.95rem]"
              style={{ textIndent: "2.5rem" }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Works Cited */}
        <div className="mt-16 pt-8 border-t border-stone-800">
          <h2
            className="text-[11px] tracking-[0.3em] uppercase text-stone-500 mb-6 text-center"
          >
            Works Cited
          </h2>
          <ul className="space-y-3">
            {REFLECTION.works.map((w, i) => (
              <li
                key={i}
                className="text-stone-400 text-[0.875rem] leading-relaxed text-center"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
