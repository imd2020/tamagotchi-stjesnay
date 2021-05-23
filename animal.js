let pic = [];
pic[0] = loadImage("pics/level-2.png");
pic[1] = loadImage("pics/level-4.png");

export default class Animal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = 2;
  }
  render() {
    if (this.state === 1) {
      image(pic[0], this.x + 50, this.y + 100, 300, 300);
    } else if (this.state === 2) {
      image(pic[1], this.x + 50, this.y + 100, 300, 300);
    }
  }
}
