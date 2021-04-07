import Assets from './assets';
import Viewport from './viewport';
import { Player as state} from './state';

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
      state.position.y -= moveRate;
    }
  } else {
    state.position.y = tY;
  }
};


const update = () => {
  switch (state.moveState) {
    case 'IDLE':
      break;
    case 'MOVING':
      executeMove();
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

  ctx.fillStyle = 'red';
  ctx.translate(Math.floor(x), Math.floor(y));
  ctx.fillRect(-width / 2, footHeight, width, -height);
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
