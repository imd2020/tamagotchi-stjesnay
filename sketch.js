/*color Palette:
dark blue: 85, 91, 110
blue: 137, 176, 174
light blue: 190, 227, 219
white: 250, 249, 249
pink: 255, 214, 186 */

import Display from "./display.js";

const X = 0;
const Y = 0;
let screenState = 0;
let display = new Display(X, Y, screenState);

function draw() {
  background(255);
  if (display.screenState === 0) {
    display.startScreen();
  }
  if (display.screenState === 1) {
    display.mainScreen();
  }
}

function mouseClicked() {
  display.systemClicked();
}

function keyTyped() {
  display.systemTyped();
}

window.keyTyped = keyTyped;
window.draw = draw;
window.mouseClicked = mouseClicked;
