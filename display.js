import Button from "./button.js";
import Animal from "./animal.js";
import { HappinessBar, LevelBar } from "./statusbar.js";
import Care from "./care.js";

export default class Display {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.foodButton = new Button(600, 150, "feed");
    this.drinkButton = new Button(600, 220, "give Water");
    this.animal = new Animal(this.x + 50, this.y + 150);
    this.happyBar = new HappinessBar(270, 80, 61, 150);
    this.levelBar = new LevelBar(100, 80, 0, 150);
    this.care = new Care(this.happyBar.currentValue);
  }
  background() {
    fill(250, 249, 249);
    strokeWeight(5);
    stroke(85, 91, 110);
    rect(this.x, this.y, 900, 600);
    strokeWeight(2);
    rect(this.x + 50, this.y + 150, 400, 400);
  }
  coin() {
    fill(255, 216, 0);
    ellipse(this.x + 800, this.y + 40, 20);
    fill(85, 91, 110);
    textAlign(RIGHT);
    text("xxx", this.x + 780, this.y + 48);
  }

  all() {
    this.foodButton.render();
    this.drinkButton.render();
    this.animal.render();
    this.coin();
    this.happyBar.render();
    this.levelBar.render();
  }
  system() {
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
}
