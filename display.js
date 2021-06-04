import Button from "./button.js";
import Key from "./key.js";
import Animal from "./animal.js";
import { HappinessBar, LevelBar } from "./statusbar.js";
import Care from "./care.js";

export default class Display {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.money = 10;
    this.foodButton = new Button(600, 150, "feed");
    this.drinkButton = new Button(600, 220, "give Water");
    this.animal = new Animal(this.x + 50, this.y + 130);
    this.happyBar = new HappinessBar(270, 80, 61, 150);
    this.levelBar = new LevelBar(100, 80, 0, 150);
    this.care = new Care(this.happyBar.currentValue, this.money);
    this.key = new Key();
    this.alphabetArraySmall = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
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
    this.alphabet = random(this.alphabetArraySmall);
    this.alphabetShown;
  }
  background() {
    fill(250, 249, 249);
    strokeWeight(5);
    stroke(85, 91, 110);
    rect(this.x, this.y, 900, 600);
    strokeWeight(2);
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

  showKey() {
    for (let i = 0; i < this.alphabetArraySmall.length; i++) {
      if (this.alphabetArraySmall[i] === this.alphabet) {
        this.alphabetShown = this.alphabetArrayBig[i];
      }
    }

    return this.alphabetShown;
  }

  all() {
    this.foodButton.render();
    this.drinkButton.render();
    this.animal.render();
    this.coin();
    this.happyBar.render();
    this.levelBar.render();
    this.key.render(this.showKey());
  }
  systemClicked() {
    this.care.currentValue = this.happyBar.currentValue;
    this.happyBar.currentValue = this.care.feed(
      this.foodButton.hitTest(this.money)
    );

    this.happyBar.currentValue = this.care.drink(
      this.drinkButton.hitTest(this.money)
    );
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
      this.alphabet = random(this.alphabetArraySmall);
      this.money += 10;
    }
    this.care.money = this.money;
  }
}
