let pic = [];
pic[0] = loadImage("pics/level-2.png");
pic[1] = loadImage("pics/level-4.png");
pic[2] = loadImage("pics/level-5.png");
pic[3] = loadImage("pics/level-6.png");
pic[4] = loadImage("pics/level-7.png");

export default class Animal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = 1;
  }
  render() {
    if (this.state === 1) {
      image(pic[0], this.x + 30, this.y + 150, 300, 300);
    } else if (this.state === 2) {
      image(pic[1], this.x + 50, this.y + 100, 300, 300);
    } else if (this.state === 3) {
      image(pic[2], this.x - 50, this.y + 40, 380, 380);
    } else if (this.state === 4) {
      image(pic[3], this.x, this.y + 20, 380, 380);
    } else if (this.state === 5) {
      image(pic[4], this.x, this.y + 40, 400, 400);
    }
  }
  startrender() {
    image(pic[0], this.x + 170, this.y, 200, 200);
    fill(85, 91, 110);
    text("FEED him and give", this.x + 470, this.y - 20);
    text("him something to DRINK", this.x + 500, this.y + 30);
    /*fill(250, 249, 249);
    rect(this.x + 300, this.y + 150, 130, 10);
    triangle(
      this.x + 430,
      this.y + 140,
      this.x + 430,
      this.y + 170,
      this.x + 450,
      this.y + 155
    );
    image(pic[4], this.x + 400, this.y - 100, 350, 350);
    */
  }
}
