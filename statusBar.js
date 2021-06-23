export class Statusbar {
  constructor(x, y, currentValue, maxValue) {
    this.x = x;
    this.y = y;
    this.currentValue = currentValue;
    this.maxValue = maxValue;
  }
}

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export class HappinessBar extends Statusbar {
  render() {
    if (this.currentValue > this.maxValue) {
      this.currentValue = this.maxValue;
    }
    strokeWeight(1);
    stroke(85, 91, 110);
    fill(85, 91, 110);
    textSize(15);
    text("Happiness", this.x + 75, this.y - 10);
    noStroke();

    fill(255);
    rect(this.x, this.y, 150, 15, 20);
    fill(137, 176, 174);
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
}

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

export class LevelBar extends Statusbar {
  constructor(x, y, currentValue, maxValue) {
    super(x, y, currentValue, maxValue);
    this.level = 0;
    this.minLevel = 0;
  }
  render() {
    if (this.currentValue > this.maxValue) {
      this.currentValue = this.maxValue;
    }
    strokeWeight(1);
    stroke(85, 91, 110);
    fill(85, 91, 110);
    textSize(15);
    text("Level", this.x + 40, this.y - 10);
    noStroke();

    fill(255);
    rect(this.x, this.y, 150, 15, 20);
    fill(255, 214, 186);
    rect(this.x, this.y, this.currentValue, 15, 20, 0, 0, 20);

    strokeWeight(1);
    stroke(85, 91, 110);
    noFill();

    rect(this.x + 125, this.y, 25, 15, 0, 20, 20, 0);
    rect(this.x + 100, this.y, 25, 15);
    rect(this.x + 75, this.y, 25, 15);
    rect(this.x + 50, this.y, 25, 15);
    rect(this.x + 25, this.y, 25, 15);
    rect(this.x, this.y, 25, 15, 20, 0, 0, 20);
  }
  checkHappiness(happyValue) {
    if (happyValue > 60) {
      if (happyValue === 75) {
        this.level = 1;
      } else if (happyValue === 90) {
        this.level = 2;
      } else if (happyValue === 105) {
        this.level = 3;
      } else if (happyValue === 120) {
        this.level = 4;
      } else if (happyValue === 135) {
        this.level = 5;
      } else if (happyValue === 150) {
        this.level = 6;
      }
    }
    if (this.level >= this.minLevel) {
      this.minLevel = this.level;
    }

    if (this.level < this.minLevel) {
      this.level = this.minLevel;
    }
    this.currentValue = this.level * 25;
    return this.currentValue;
  }
}
