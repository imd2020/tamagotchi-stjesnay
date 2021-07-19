const WIDTH = 900;
const HEIGHT = 600;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(30);
}

window.addEventListener("resize", function () {
  resizeCanvas(WIDTH, HEIGHT);
  clear();
});

new p5();
var width = WIDTH;
var height = HEIGHT;
