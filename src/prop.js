import HotSpot from './hotspot';
import { Verbs } from './data';
import Game from './game';
import Mouse from './mouse';

export default class Prop {
  constructor(params) {
    Object.assign(this, {
      disabled: false,
      ...params
    });
    this.hotSpot = new HotSpot(params.hotSpot);
  }

  canHandleVerb() {
    return !this.disabled && this.hotSpot.test(Mouse.x, Mouse.y) &&
      (typeof this.verbs[Game.verb.name] !== 'undefined');
  }

  handleVerb() {
    const verb = this.verbs[Game.verb.name];
    if (typeof verb === 'string') {
      console.log(verb);
    } else if (typeof verb === 'function') {
      verb.call(this);
    }
  }

  draw() {
    if (this.sprite) {
      this.sprite.draw(this.x, this.y)
    }
  }

  drawBounds() {
    this.hotSpot.draw();
  }
};
