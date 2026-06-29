import { useEffect, useRef } from "react";
function random(min, max) {
  return Math.random() * (max - min) + min;
}
export default function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;

    let stars = [];
    let dust = [];
    let meteors = [];

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const STAR_COUNT =
      window.innerWidth < 768 ? 180 : 320;

    const DUST_COUNT =
      window.innerWidth < 768 ? 80 : 150;

    // -------------------------
    // Resize
    // -------------------------

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      createStars();
      createDust();

      meteors = [];
    }

    // -------------------------
    // Create Stars
    // -------------------------

    function createStars() {
      stars = [];

      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,

          radius: Math.random() * 1.8 + 0.2,

          alpha: 0.2 + Math.random() * 0.8,

          speed: Math.random() * 0.015 + 0.003,

          direction:
            Math.random() > 0.5 ? 1 : -1,

          color:
            Math.random() > 0.95
              ? "#dbeafe"
              : "#ffffff",
        });
      }
    }

    // -------------------------
    // Create Dust
    // -------------------------

    function createDust() {

  dust = [];

  const count =
    window.innerWidth < 768
      ? 60
      : 120;

  for (let i = 0; i < count; i++) {

    dust.push({

      x: random(0, canvas.width),

      y: random(0, canvas.height),

      radius: random(0.4, 2),

      alpha: random(0.03, 0.12),

      vx: random(-0.04, 0.04),

      vy: random(-0.04, 0.04),

    });

  }

}

    // -------------------------
    // Spawn Meteor
    // -------------------------

    function spawnMeteor() {

  if (meteors.length >= 2) return;

  const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;

  const speed = 12 + Math.random() * 5;

  meteors.push({

    x: Math.random() * canvas.width * 0.7,

    y: Math.random() * canvas.height * 0.35,

    vx: Math.cos(angle) * speed,

    vy: Math.sin(angle) * speed,

    length: 180 + Math.random() * 120,

    width: 1.5 + Math.random() * 1.5,

    age: 0,

    life: 60 + Math.random() * 30,

  });

}
resize();

window.addEventListener("resize", resize);
    // -------------------------
    // Draw Stars
    // -------------------------

    function drawStars() {
      for (const star of stars) {
        star.alpha +=
          star.speed * star.direction;

        if (
          star.alpha >= 1 ||
          star.alpha <= 0.2
        ) {
          star.direction *= -1;
        }

        ctx.beginPath();

        ctx.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;

        ctx.shadowBlur = 8;
        ctx.shadowColor = "#ffffff";

        ctx.fill();
      }

      ctx.shadowBlur = 0;
    }

    // -------------------------
    // Draw Dust
    // -------------------------

    function drawDust() {

  for (const p of dust) {

    p.x += p.vx;
    p.y += p.vy;

    // Mouse Parallax
    p.x +=
      (mouse.x - canvas.width / 2) *
      0.00005;

    p.y +=
      (mouse.y - canvas.height / 2) *
      0.00005;

    // Wrap around screen

    if (p.x < -5)
      p.x = canvas.width + 5;

    if (p.x > canvas.width + 5)
      p.x = -5;

    if (p.y < -5)
      p.y = canvas.height + 5;

    if (p.y > canvas.height + 5)
      p.y = -5;

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(255,255,255,${p.alpha})`;

    ctx.fill();

  }

}

    // -------------------------
    // Draw Meteors
    // -------------------------

   function drawMeteors() {

  if (Math.random() < 0.0025) {
    spawnMeteor();
  }

  for (let i = meteors.length - 1; i >= 0; i--) {

    const m = meteors[i];

    m.x += m.vx;
    m.y += m.vy;

    m.age++;

    const alpha = 1 - m.age / m.life;

    const gradient = ctx.createLinearGradient(

      m.x,
      m.y,

      m.x - m.vx * 12,
      m.y - m.vy * 12

    );

    gradient.addColorStop(
      0,
      `rgba(255,255,255,${alpha})`
    );

    gradient.addColorStop(
      0.25,
      `rgba(180,220,255,${alpha * 0.7})`
    );

    gradient.addColorStop(
      1,
      "rgba(255,255,255,0)"
    );

    ctx.beginPath();

    ctx.strokeStyle = gradient;

    ctx.lineWidth = m.width;

    ctx.lineCap = "round";

    ctx.moveTo(
      m.x,
      m.y
    );

    ctx.lineTo(
      m.x - m.vx * 12,
      m.y - m.vy * 12
    );

    ctx.stroke();

    // Head glow

    ctx.beginPath();

    ctx.fillStyle =
      `rgba(255,255,255,${alpha})`;

    ctx.shadowBlur = 18;

    ctx.shadowColor = "#ffffff";

    ctx.arc(
      m.x,
      m.y,
      2.5,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";  
    if (m.age >= m.life) {
      meteors.splice(i, 1);
    }

  }

}
function animate() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  drawDust();

  drawStars();

  drawMeteors();

  animationId =
    requestAnimationFrame(
      animate
    );

}
animate();
return () => {

  window.removeEventListener(
    "resize",
    resize
  );


  cancelAnimationFrame(
    animationId
  );

};}, []);

return (
  <canvas
    ref={canvasRef}
    className="star-canvas"
  />
);

}

