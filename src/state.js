import Rooms from './data/rooms';

export const Player = {
  moveState: 'IDLE',

  position: {
    x: 20,
    y: 90
  },

  width: 12,
  height: 24,
  footHeight: 4,

  moveTarget: {
    x: 0,
    y: 0
  },

  moveRate: 2,

  direction: 'RIGHT',
};

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
