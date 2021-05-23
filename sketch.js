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
  console.log("Hallo");
  display.hallo();
  background(255);
  display.background();
  display.all();
}
