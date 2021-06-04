export default class Key {
  constructor() {}

  render(alphabet) {
    textSize(150);
    fill(85, 91, 110);
    text(alphabet, 720, 500);
  }
  hitTest(alphabet) {
    if (key === alphabet) {
      //if not alphabet happy sinkt
      return true;
    } else {
      return false;
    }
  }
}
