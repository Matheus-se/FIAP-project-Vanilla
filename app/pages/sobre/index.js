document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#main-canvas");
  const c = canvas.getContext("2d");

  let increment = 0;
  let dx = 0;
  let dy = 0;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - window.innerHeight / 10;

  function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);

    drawDots(c, 100, 100 + dx * -5, 100 + dy * -5, 1, "purple", 10);
    drawDots(c, 100, 500 + dx * 5, 100 + dy * 5, 1, "red", 5);
    drawDots(c, 100, 200 + dx * 2, 300 + dy * 2, 1, "black", 25);
    drawDots(c, 100, 600 + dx * 6, 500 + dy * 6, 1, "purple", 5);
    drawDots(c, 100, 850 + dx * 8, 100 + dy * 8, 1, "purple", 8);

    wave(canvas, c, canvas.height, 0.001, 60, "#633bbf", increment - 1);
    wave(canvas, c, canvas.height, 0.002, 60, "#8257e6", increment);

    increment += 0.02;
  }

  window.addEventListener("mousemove", (e) => {
    dx = (window.innerWidth - e.pageX) / 100;
    dy = (window.innerHeight - e.pageY) / 100;
  });
  
  animate();
});

function wave(canvas, c, y, amplitude, frequency, color, increment, scale = 1) {
  c.beginPath();
  c.moveTo(0, canvas.height);
  c.lineTo(0, y / 8);

  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(
      i,
      (7 * y) / 8 + Math.sin(scale * i * amplitude + increment) * frequency
    );
  }

  c.lineTo(canvas.width, canvas.height);
  c.fillStyle = color;
  c.strokeStyle = color;
  c.fill();
  c.stroke();
}

function drawDots(ctx, n, x, y, r, color, space = 0) {
  if (Math.sqrt(n) % 1 !== 0) {
    throw `n=${n}, n must be a perfect square.`;
  }

  let normalizer = 0;
  ctx.save();

  for (let i = 0; i < n; i++) {
    ctx.beginPath();
    if (i % Math.sqrt(n) == 0 && i !== 0) {
      normalizer = -i * (r * 2 + space);
      y += 2 * r + space;
    }
    ctx.arc(x + i * (r * 2 + space) + normalizer, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  ctx.restore();
}
