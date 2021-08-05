import { loaded } from './data/assets';

import Screen from './screen';
import Game from './game';

const mainLoop = t => {
  Game.update();
  Game.draw();
  Screen.render();
  requestAnimationFrame(mainLoop);
};

loaded.then(() => {
  Game.setup();
  requestAnimationFrame(mainLoop);
});

