import gsap from "./gsap.min.js";

const imdRechteck = { x: 10, y: 10 };

function draw() {
  background(255);
  rect(imdRechteck.x, imdRechteck.y, 50, 50);
}

gsap.to(imdRechteck, {
  duration: 4,
  ease: "linear",
  x: 400,
  onComplete: () => {
    gsap.to(imdRechteck, {
      duration: 4,
      ease: "elastic",
      y: 400,
    });
  },
});
