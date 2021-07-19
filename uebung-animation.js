import gsap from "./gsap.min.js";

const cube = { x: 10, y: 10, width: 50, height: 50 };

function draw() {
  background(255);
  rect(cube.x, cube.y, cube.width, cube.height);
}

function animation() {
  gsap.to(cube, {
    duration: 1,
    ease: "easeOut",
    x: 400,
    onComplete: () => {
      gsap.to(cube, {
        duration: 0.5,
        ease: "back",
        y: 500,

        onComplete: () => {
          gsap.to(cube, {
            duration: 2,
            ease: "bounce",
            y: 600,
            width: 100,
            height: 20,
          });
        },
      });
    },
  });
}

function mouseClicked() {
  cube.x = 10;
  cube.y = 10;
  cube.width = 50;
  cube.height = 50;
  animation();
}
