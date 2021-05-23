export default class Button {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
  }
  render() {
    noStroke();
    fill(137, 176, 174);
    rect(this.x, this.y, 200, 40, 30);
    fill(255);
    strokeWeight(1);
    textSize(25);
    textAlign(CENTER);
    text(this.name, this.x + 100, this.y + 30);
  }
  hitTest() {
    if (
      mouseIsPressed &&
      mouseX < this.x + 200 &&
      mouseX > this.x &&
      mouseY < this.y + 40 &&
      mouseY > this.y
    ) {
      return true;
    } else {
      return false;
    }
  }
}
