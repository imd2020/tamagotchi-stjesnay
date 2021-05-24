/*color Palette:
dark blue: 85, 91, 110
blue: 137, 176, 174
light blue: 190, 227, 219
white: 250, 249, 249
pink: 255, 214, 186 */

import Display from "./display.js";

const X = 0;
const Y = 0;
let display = new Display(X, Y);

function draw() {
  background(255);
  display.background();
  display.all();

  fill(85, 91, 110);
  rect(10, 20, 30, 50);
  fill(137, 176, 174);
  rect(10, 70, 30, 50);
  fill(190, 227, 219);
  rect(10, 120, 30, 50);
  fill(250, 249, 249);
  rect(10, 170, 30, 50);
  fill(255, 214, 186);
  rect(10, 220, 30, 50);
}

function mouseClicked() {
  display.system();
}

window.draw = draw;
window.mouseClicked = mouseClicked;
