import Screen from './screen';
import { getAsset } from './data/assets';

export default class Sprite {
  constructor(params) {
    Object.assign(this, {
      offsetX: 0,
      offsetY: 0,
      originX: 0,
      originY: 0
    }, params);
  }

  draw(x, y, frame = 0) {
    Screen.ctx.drawImage(
      getAsset(this.image),
      this.offsetX + this.width * frame,
      0,
      this.width,
      this.height,
      x - this.originX,
      y - this.originY,
      this.width,
      this.height
    );

  }
};
