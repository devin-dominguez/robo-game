import Screen from './screen';

export default class HotSpot {
  constructor(boundingBox) {
    this.x = boundingBox.x;
    this.y = boundingBox.y;
    this.width = boundingBox.width;
    this.height = boundingBox.height;
  }

  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }

  test(x, y) {
    return (
      (x >= this.left) &&
      (x <= this.right) &&
      (y >= this.top) &&
      (y <= this.bottom)
    );
  }

  draw() {
    const ctx = Screen.ctx;
    ctx.save();
    ctx.fillStyle = 'rgba(255, 0, 0, 0.25)';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }
};
