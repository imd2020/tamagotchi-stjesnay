//---import classes---
import Button from "./button.js";
import Key from "./key.js";
import Animal from "./animal.js";
import { HappinessBar, LevelBar } from "./statusbar.js";
import Care from "./care.js";
import Tutorial from "./tutorial.js";

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export default class Display {
  constructor(x, y, screenState) {
    this.x = x;
    this.y = y;
    this.screenState = screenState;
    //---------------
    this.tutorialScreen = 1;
    this.money = 100;
    //---create objects---
    this.tutorial = new Tutorial(this.x + 200, this.y + 50);
    this.startButton = new Button(this.x + 350, this.y + 450, "Start");
    this.foodButton = new Button(600, 150, "feed");
    this.drinkButton = new Button(600, 220, "give Water");
    this.replayButton = new Button(570, 430, "Replay");
    this.animal = new Animal(this.x + 50, this.y + 130);
    this.happyBar = new HappinessBar(270, 80, 61, 150);
    this.levelBar = new LevelBar(100, 80, 0, 150);
    this.care = new Care(this.happyBar.currentValue, this.money);
    this.key = new Key();
    //---alphabet---

    this.alphabetArrayBig = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    this.alphabet = random(this.alphabetArrayBig);
  }
  startScreen() {
    let tutorialScreen = this.tutorialScreen;
    fill(190, 227, 219);
    strokeWeight(5);
    stroke(85, 91, 110);
    rect(this.x, this.y, 900, 600);

    this.startButton.render();
    fill(250, 249, 249);
    strokeWeight(2);
    rect(this.x + 200, this.y + 50, 500, 300);
    if (tutorialScreen === 1) {
      this.tutorial.renderScreen1();
    }
    if (tutorialScreen === 2) {
      this.tutorial.renderScreen2();
    }
    if (tutorialScreen === 3) {
      this.tutorial.renderScreen3();
    }
  }
  mainScreen() {
    this.background();
    this.foodButton.render();
    this.drinkButton.render();
    this.animal.render();
    this.coin();
    this.happyBar.render();
    this.levelBar.render();
    this.key.render(this.alphabet);
    if (this.animal.state === 5) {
      this.screenState = 2;
    }
  }
  endScreen() {
    this.background();
    fill(137, 176, 174);
    noStroke();
    textSize(50);
    textAlign(CENTER);
    text("! ! ! CONGRATULATIONS ! ! !", this.x + 450, this.y + 100);
    textSize(40);
    text("You Did An", this.x + 600, this.y + 190);
    text("Amazing Job", this.x + 700, this.y + 250);
    this.animal.render();
    this.replayButton.render();
  }
  background() {
    fill(190, 227, 219);
    strokeWeight(5);
    stroke(85, 91, 110);
    rect(this.x, this.y, 900, 600);
    strokeWeight(2);
    fill(250, 249, 249);
    rect(this.x + 50, this.y + 150, 400, 400);
    rect(this.x + 520, this.y + 350, 300, 200);
  }
  coin() {
    this.money = this.care.money;
    fill(255, 216, 0);
    ellipse(this.x + 800, this.y + 40, 20);
    fill(85, 91, 110);
    textAlign(RIGHT);
    text(this.money, this.x + 780, this.y + 48);
  }
  systemClicked() {
    this.care.currentValue = this.happyBar.currentValue;
    this.happyBar.currentValue = this.care.feed(this.foodButton.hitTest());
    this.happyBar.currentValue = this.care.drink(this.drinkButton.hitTest());
    if (this.happyBar.currentValue % 15 === 0) {
      this.levelBar.currentValue += 25;
    }
    if (this.levelBar.currentValue === this.levelBar.maxValue) {
      this.animal.state += 1;
      this.levelBar.currentValue = 0;
      this.happyBar.currentValue = 61;
    }
  }
  systemTyped() {
    if (this.key.hitTest(this.alphabet)) {
      this.alphabet = random(this.alphabetArrayBig);
      this.money += 10;
    }
    this.care.money = this.money;
  }
}
