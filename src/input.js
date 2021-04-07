import Viewport from './viewport';
import Player from './player';
import { constrain } from './utils';

const getClickLocation = e => {
  const {  width, height, scale } = Viewport.state;
  const { offsetX, offsetY } = e;
  const x = constrain(0, width - 1, Math.floor(offsetX / scale));
  const y = constrain(0, height - 1, Math.floor(offsetY / scale));

  const { x: vpX, y: vpY } = Viewport.getOffset();

  return {
    x: x + vpX,
    y: y + vpY
  };
}

const handleLeftClick = e => {
  e.preventDefault();
  if (e.shiftKey) {
    handleRightClick(e);
    return;
  }

  const { x, y } = getClickLocation(e);
  Player.moveTo(x, y);
}

const handleRightClick = e => {
  e.preventDefault();
  const { x, y } = getClickLocation(e);
  console.log(`right clicked: ${x}, ${y}`);

}

Viewport.canvas.addEventListener('click', handleLeftClick);
Viewport.canvas.addEventListener('contextmenu', handleRightClick);
