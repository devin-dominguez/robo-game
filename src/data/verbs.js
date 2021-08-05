import { loadData } from '../utils';

import Sprites from './sprites';
import Verb from '../verb';

const Verbs = {
  look: {
    sprite: Sprites.cursors.look,
  },
  take: {
    sprite: Sprites.cursors.hand

  },
  speak: {
    sprite: Sprites.cursors.sound

  },
  use: {
    sprite: Sprites.cursors.gear
  }
};

export default loadData(Verbs, Verb);
