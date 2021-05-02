document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#main-canvas");
  const c = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  async function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    render(c, canvas);
  }
  animate();
});

var circles = [];

function render(c, canvas) {
  if (circles.length < 10) {
    const r = getRandomInt(20, 100);
    const x = getRandomInt(0, canvas.width);
    const y = getRandomInt(canvas.height + r, canvas.height * 2+r);
    const speed = getRandomInt(1, 5);
    circles.push(new Circle(c, x, y, r, speed));
  }

  circles.forEach((circle) => {
    circle.update();
  });
  circles.forEach((circle) => {
    if (circle.y + circle.r <= 0) {
      circles.splice(circles.indexOf(circle), 1);
    }
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Circle(c, x, y, r, s) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.speed = s;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fillStyle = "#8257e6";
    c.fill();
  };

  this.update = function () {
    this.y -= this.speed;

    this.draw();
  };
}
