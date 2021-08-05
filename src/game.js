import Mouse from './mouse';
import {Verbs, Sprites, Rooms } from './data';

export default {
  setup() {
    this.setVerb(Verbs.look);
    this.setRoom(Rooms.TestRoom);
  },

  update() {
    Mouse.setCursor(this.verb.sprite, 0);

    this.room.props.all.forEach(prop => {
      if (prop.canHandleVerb()) {
        Mouse.setCursor(this.verb.sprite, 1);
      }
    });

    this.room.update();
  },

  draw() {
    this.room.draw();

    this.room.props.all.forEach(prop => {
      prop.draw();
      //prop.drawBounds();
    });

    Mouse.draw();
  },

  leftClick() {
    console.log(Mouse.x, Mouse.y)
    this.room.props.all.forEach(prop => {
      if (prop.canHandleVerb()) {
        prop.handleVerb();
      }
    });
  },

  rightClick() {
    this.incrementVerb();
  },

  mouseMove() { },

  setRoom(room) {
    this.room = room;
  },

  setVerb(verb) {
    this.verb = verb;
    Mouse.setCursor(this.verb.sprite);
  },

  incrementVerb() {
    const currentIndex = Verbs.all.findIndex(verb => verb === this.verb);
    const nextVerb = Verbs.all[(currentIndex + 1) % Verbs.all.length]

    this.setVerb(nextVerb);
  }
};
