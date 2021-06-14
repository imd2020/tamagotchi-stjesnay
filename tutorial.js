let pic = [];
pic[0] = loadImage("pics/level-2.png");
pic[1] = loadImage("pics/level-7.png");

export default class Tutorial {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  renderScreen1() {
    fill(85, 91, 110);
    text("FEED him and give", this.x + 320, this.y + 50);
    text("him something to DRINK", this.x + 350, this.y + 100);
    image(pic[0], this.x, this.y + 100, 200, 200);
    fill(137, 176, 174);
    rect(this.x + 220, this.y + 170, 150, 30, 30);
    rect(this.x + 220, this.y + 210, 150, 30, 30);
    fill(250, 249, 249);
    textAlign(CENTER);
    textSize(20);
    text("Feed", this.x + 295, this.y + 192);
    text("Drink", this.x + 295, this.y + 232);

    fill(85, 91, 110);
    textSize(20);
    text("next", this.x + 460, this.y + 290);
  }

  renderScreen2() {
    fill(85, 91, 110);
    text("You can earn more Money", this.x + 330, this.y + 50);
    text("by typing the shown Keys", this.x + 330, this.y + 100);
    noFill();
    stroke(85, 91, 110);
    rect(this.x + 80, this.y + 130, 150, 150);
    noStroke();
    fill(85, 91, 110);
    textSize(100);
    text("A", this.x + 155, this.y + 240);

    fill(85, 91, 110);
    textSize(20);
    text("next", this.x + 460, this.y + 290);
    text("back", this.x + 40, this.y + 290);
  }

  renderScreen3() {
    fill(85, 91, 110);
    text("Try to reach the", this.x + 250, this.y + 50);
    text("'Eierlegende Wollmilchsau'", this.x + 250, this.y + 100);
    image(pic[1], this.x + 150, this.y + 120, 200, 200);
    textSize(20);
    text("back", this.x + 40, this.y + 290);
  }
  hitTestNext() {
    //rect(this.x + 440, this.y + 275, 40, 15);

    if (
      mouseX > this.x + 440 &&
      mouseX < this.x + 480 &&
      mouseY > this.y + 275 &&
      mouseY < this.y + 290
    ) {
      return true;
    } else {
      return false;
    }
  }

  hitTestBack() {
    //rect(this.x + 20, this.y + 275, 40, 15);

    if (
      mouseX > this.x + 20 &&
      mouseX < this.x + 60 &&
      mouseY > this.y + 275 &&
      mouseY < this.y + 290
    ) {
      return true;
    } else {
      return false;
    }
  }
}
