import Button from "./button.js";
import Animal from "./animal.js";
import Happiness from "./statusbar.js";
import Care from "./care.js";

export default class Display {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.foodButton = new Button(600, 150, "feed");
    this.drinkButton = new Button(600, 220, "give Water");
    this.animal = new Animal(this.x + 50, this.y + 150);
    this.happy = new Happiness(270, 80, 30);
    this.care = new Care(this.happy.currentValue);
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
    this.happy.render();
  }
  system() {
    this.happy.currentValue = this.care.feed(this.foodButton.hitTest());
  }
}
