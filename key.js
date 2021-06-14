export default class Key {
  constructor() {}

  render(alphabet) {
    textSize(15);
    fill(85, 91, 110);
    text("Type Letter to get Coins", 680, 340);
    textSize(150);
    fill(137, 176, 174);
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
