import Rooms from './data/rooms';
import Sprites from './data/sprites';

export const Player = {
  moveState: 'IDLE',

  position: {
    x: 40,
    y: 40
  },

  width: 16,
  height: 32,
  footHeight: 4,

  moveTarget: {
    x: 0,
    y: 0
  },

  moveRate: 2,

  direction: 'RIGHT',
  sprite: Sprites.PLAYER_WALK_RIGHT
};
console.log(Player)

export const Viewport = {
  scale: 7,
  width: 160,
  height: 120,
  position: {
    x: 0,
    y: 0
  }
};

export const Room = {
  current: Rooms.TEST_ROOM,
};
