export class Statusbar {
  constructor(x, y, currentValue) {
    this.x = x;
    this.y = y;
    this.currentValue = currentValue;
  }
  hello() {
    fill(0, 0, 255);
    ellipse(this.x + 100, this.y, 50, 50);
  }
}

export default class Happiness extends Statusbar {
  constructor(x, y, currentValue) {
    super(x, y, currentValue);
  }
  render() {
    textSize(15);
    text("Happiness", this.x + 75, this.y - 10);
    noStroke();

    fill(200);
    rect(this.x, this.y, 150, 15, 20);
    fill(190, 227, 219);
    rect(this.x, this.y, this.currentValue, 15, 20, 0, 0, 20);

    strokeWeight(1);
    stroke(85, 91, 110);
    noFill();
    rect(this.x + 135, this.y, 15, 15, 0, 20, 20, 0);
    rect(this.x + 120, this.y, 15, 15);
    rect(this.x + 105, this.y, 15, 15);
    rect(this.x + 90, this.y, 15, 15);
    rect(this.x + 75, this.y, 15, 15);
    rect(this.x + 60, this.y, 15, 15);
    rect(this.x + 45, this.y, 15, 15);
    rect(this.x + 30, this.y, 15, 15);
    rect(this.x + 15, this.y, 15, 15);
    rect(this.x, this.y, 15, 15, 20, 0, 0, 20);
  }
  hallo() {
    console.log("Hello");
  }
}
