/*color Palette:
dark blue: 85, 91, 110
blue: 137, 176, 174
light blue: 190, 227, 219
white: 250, 249, 249
pink: 255, 214, 186 */

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

import Display from "./display.js";

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const X = 0;
const Y = 0;
let screenState = 0;
let display = new Display(X, Y, screenState);

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

function reset() {
  display.screenState = 0;
  display.tutorialScreen = 1;
  display.money = 100;
  display.care.money = display.money;
  display.animal.state = 1;
  display.happyBar.currentValue = 61;
  display.levelBar.currentValue = 0;
}

function mouseClicked() {
  if (display.screenState === 0) {
    if (
      display.tutorial.hitTestNext() &&
      (display.tutorialScreen === 1 || display.tutorialScreen === 2)
    ) {
      display.tutorialScreen += 1;
    }
    if (
      display.tutorial.hitTestBack() &&
      (display.tutorialScreen === 2 || display.tutorialScreen === 3)
    ) {
      display.tutorialScreen -= 1;
    }
    if (display.startButton.hitTest()) {
      display.screenState = 1;
    }
  } else if (display.screenState === 1) {
    display.systemClicked();
  } else if (display.screenState === 2 || display.screenState === 3) {
    if (display.replayButton.hitTest()) {
      reset();
    }
  }
}

function keyTyped() {
  display.systemTyped();
}

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

function draw() {
  background(255);
  if (display.screenState === 0) {
    display.startScreen();
  } else if (display.screenState === 1) {
    display.mainScreen();
  } else if (display.screenState === 2) {
    display.endScreen();
  } else if (display.screenState === 3) {
    display.deathScreen();
  }
}

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

window.keyTyped = keyTyped;
window.draw = draw;
window.mouseClicked = mouseClicked;
