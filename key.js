export default class Key {
  render(alphabet) {
    textSize(15);
    fill(85, 91, 110);
    text("Type Letter to get Coins", 680, 340);
    textSize(150);
    fill(85, 91, 110);
    text(alphabet, 720, 500);
  }
  hitTest(alphabet) {
    if (key.toLowerCase() === alphabet.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}
