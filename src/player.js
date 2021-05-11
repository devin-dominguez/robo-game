import Assets from './assets';
import Viewport from './viewport';
import { Player as state} from './state';

import Sprite from './sprite';
import Sprites from './data/sprites';

const hasReachedTarget = () =>
  (state.position.x === state.moveTarget.x) &&
    (state.position.y === state.moveTarget.y);

const executeMove = () => {
  if (hasReachedTarget()) {
    state.moveState = 'IDLE';
    return;
  }

  const { x, y } = state.position;
  const { x: tX, y: tY } = state.moveTarget;
  const { moveRate } = state;

  if (Math.abs(x - tX) > moveRate) {
    if (x < tX) {
      state.position.x += moveRate;
      state.direction = 'RIGHT';
    } else {
      state.position.x -= moveRate;
      state.direction = 'LEFT';
    }
  } else {
    state.position.x = tX;
  }

  if (Math.abs(y - tY) > moveRate) {
    if (y < tY) {
      state.position.y += moveRate;
    } else {
      state.position.y -= moveRate
    }
  } else {
    state.position.y = tY;
  }

  const angle = Math.atan2((y - tY) , (x - tX));
  const PI = Math.PI;
  state.angle = angle;
  if (angle >=  Math.PI / 4 && angle <= 3 * Math.PI / 4) {
    state.direction = 'BACK';
  }  else if (angle <=  -Math.PI / 4 && angle >= -3 * Math.PI / 4) {
    state.direction = 'FRONT';
  }
};


const update = () => {

  switch (state.moveState) {
    case 'IDLE':
      break;
    case 'MOVING':
      executeMove();
      Sprite.update(state.sprite, 0, 0);
      break;
    default:
      break;
  }

};

const draw = () => {
  const { ctx } = Viewport;
  const { position, width, height, footHeight } = state;
  const { x, y } = position;

  ctx.save();

  ctx.translate(Math.floor(x), Math.floor(y));

  //ctx.fillStyle = 'red';
  //ctx.fillRect(-width / 2, footHeight, width, -height);

  if (state.moveState === 'MOVING') {
    switch (state.direction) {
      case 'LEFT':
        state.sprite = Sprites.PLAYER_WALK_LEFT;
        break;
      case 'RIGHT':
        state.sprite = Sprites.PLAYER_WALK_RIGHT;
        break;
      case 'FRONT':
        state.sprite = Sprites.PLAYER_WALK_FRONT;
        break;
      case 'BACK':
        state.sprite = Sprites.PLAYER_WALK_BACK;
        break;
      default:
        break;
    }
  } else {
    state.sprite = Sprites.PLAYER_WALK_FRONT;
    state.sprite.frame = 0;
  }

  Sprite.draw(state.sprite, -width , -height - footHeight);
  //ctx.save();
  //ctx.rotate(state.angle)
  //ctx.fillRect(0, 0, 2, 50);
  //ctx.restore();
  ctx.restore();
};

const moveTo = (x, y) => {
  state.moveTarget = {x, y};
  state.moveState = 'MOVING';
};

const getBoundingBox = () => {
  const { position, width, height, footHeight } = state;

  return {
    left: position.x - (width / 2),
    right: position.x + (width / 2),
    top: position.y - height - footHeight,
    bottom: position.y + footHeight
  };
};

export default {
  state,
  update,
  draw,
  moveTo,
  getBoundingBox,
};
