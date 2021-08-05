import Screen from './screen';
import Game from './game';

const Mouse = {
  x: 0,
  y: 0,
  cursor: null,
  cursorFrame: 0,
  setCursor(cursor, frame = 0) {
    this.cursor = cursor;
    this.cursorFrame = frame;
  },

  draw() {
    if (this.cursor) {
      this.cursor.draw(this.x, this.y, this.cursorFrame);
    }
  }
};

Screen.renderCanvas.addEventListener('mousemove', e => {
  Mouse.x = Math.floor(e.offsetX / 4);
  Mouse.y = Math.floor(e.offsetY / 4);
  Game.mouseMove();
});

Screen.renderCanvas.addEventListener('click', e => {
  e.preventDefault();
  Game.leftClick();
});

Screen.renderCanvas.addEventListener('contextmenu', e => {
  e.preventDefault();
  Game.rightClick();
});

export default Mouse;
