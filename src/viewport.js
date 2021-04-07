import { Viewport as state  } from './state';
import Room from './room';
import Player from './player';
import { constrain } from './utils';

const SCROLL_THRESHOLD = 36;

const drawCanvas = document.createElement('canvas');
drawCanvas.width = state.width;
drawCanvas.height = state.height;

const renderCanvas = document.createElement('canvas');
renderCanvas.width = state.width * state.scale;
renderCanvas.height = state.height * state.scale;

const drawCtx = drawCanvas.getContext('2d');
drawCtx.imageSmoothingEnabled = false;
const renderCtx = renderCanvas.getContext('2d');
renderCtx.imageSmoothingEnabled = false;

document.body.appendChild(renderCanvas);

const getViewportBoundingBox = () => {
  const { position, width, height } = state;

  return {
    top: position.y + SCROLL_THRESHOLD,
    bottom: position.y + height - SCROLL_THRESHOLD,
    left: position.x + SCROLL_THRESHOLD,
    right: position.x + width - SCROLL_THRESHOLD
  };
};

const render= () => {
    renderCtx.save();
    renderCtx.scale(state.scale, state.scale);
    renderCtx.drawImage(drawCanvas, 0, 0);
    renderCtx.restore();
};

const update = () => {
  const playerBB = Player.getBoundingBox();
  const viewportBB = getViewportBoundingBox();

  if (playerBB.left < viewportBB.left) {
    state.position.x -= viewportBB.left - playerBB.left ;
  } else if (playerBB.right >= viewportBB.right) {
    state.position.x += playerBB.right - viewportBB.right ;
  }

  if (playerBB.top < viewportBB.top) {
    state.position.y -= viewportBB.top - playerBB.top ;
  } else if (playerBB.bottom >= viewportBB.bottom) {
    state.position.y += playerBB.bottom - viewportBB.bottom ;
  }
};

const getOffset = () => {
  const { width, height } = Room.state.current;
  const { position, width: sWidth, height: sHeight } = state;

  return {
    x: constrain(0, width - sWidth, position.x),
    y: constrain(0, height - sHeight, position.y),
  };
};

export default {
  state,
  ctx: drawCtx,
  canvas: renderCanvas,
  update,
  getOffset,
  render
};
