import Viewport from './viewport';
import Assets from './assets';
import Room from './room';
import Player from './player';
import { constrain } from './utils';

import './input';
import Logger from './logger';

const targetRate = 60;
let frameRate = 60;
let frameCount = 0;

let pt = 0;
const mainLoop = t => {
  const dt = t - pt;
  pt = t;
  frameRate += 1000 / dt;
  frameRate /= 2;
  frameRate = Math.round(frameRate);

  if (frameCount < (frameRate / targetRate)) {
    frameCount++;
  } else {
    frameCount = 0;

    update();
    draw();
  }

  window.requestAnimationFrame(mainLoop);
};


const update = () => {
  Player.update();
  Viewport.update();

  Logger.clear();

  Logger.addLine(`x: ${Player.state.position.x}`);
  Logger.addLine(`y: ${Player.state.position.y}`);
  Logger.addLine(`targetX: ${Player.state.moveTarget.x}`);
  Logger.addLine(`targetY: ${Player.state.moveTarget.y}`);
  Logger.addLine(`state: ${Player.state.moveState}`);
  Logger.addLine(`direction: ${Player.state.direction}`);
  Logger.addLine(`angle: ${Player.state.angle}`);
};

const draw  = () => {
  const { ctx } = Viewport;

  ctx.save();

  const {x, y} = Viewport.getOffset();

  ctx.translate(-x, -y);

  Room.draw();
  Player.draw();
  ctx.restore();

  Viewport.render();
};

Assets.loaded.then(() => {
  window.requestAnimationFrame(mainLoop);
});


