export default class Care {
  constructor(currentValue) {
    this.currentValue = currentValue;
  }
  feed(hitTest) {
    if (hitTest === true) {
      this.currentValue += 1;
    }

    return this.currentValue;
  }
  drink(hitTest) {
    if (hitTest === true) {
      this.currentValue += 1;
    }
    return this.currentValue;
  }
}
