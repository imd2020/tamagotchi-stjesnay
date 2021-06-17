//---image loader---
let pic = [
  loadImage("pics/level-2.png"),
  loadImage("pics/level-4.png"),
  loadImage("pics/level-5.png"),
  loadImage("pics/level-6.png"),
  loadImage("pics/level-7.png"),
];

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export default class Animal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = 1;
  }
  render() {
    //---check level---
    if (this.state === 1) {
      image(pic[0], this.x + 30, this.y + 150, 300, 300);
    } else if (this.state === 2) {
      image(pic[1], this.x + 50, this.y + 100, 300, 300);
    } else if (this.state === 3) {
      image(pic[2], this.x - 50, this.y + 40, 380, 380);
    } else if (this.state === 4) {
      image(pic[3], this.x, this.y + 20, 380, 380);
    } else if (this.state === 5) {
      image(pic[4], this.x + 30, this.y + 40, 400, 400);
    }
  }
}
