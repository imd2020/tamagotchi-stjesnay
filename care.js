export default class Care {
  constructor(currentValue) {
    this.currentValue = currentValue;
  }
  feed(hitTest) {
    if (hitTest === true) {
      this.currentValue += 15;
    }
    return this.currentValue;
  }
  drink() {}
}
