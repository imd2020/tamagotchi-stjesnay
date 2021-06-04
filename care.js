export default class Care {
  constructor(currentValue, money) {
    this.currentValue = currentValue;
    this.money = money;
  }
  feed(hitTest) {
    if (hitTest === true && this.money > 1) {
      this.currentValue += 1;
      this.money -= 2;
    }

    return this.currentValue;
  }
  drink(hitTest) {
    if (hitTest === true && this.money > 1) {
      this.currentValue += 1;
      this.money -= 2;
    }
    return this.currentValue;
  }
}
