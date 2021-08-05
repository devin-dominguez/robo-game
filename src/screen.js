import { screen as config } from './data/config';

const createCanvas = (width, height, shouldAppend) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  if (shouldAppend) {
    canvas.tabIndex = -1;
    document.body.appendChild(canvas);
  }

  return {
    canvas,
    ctx
  };
}

const { width, height, scale } = config;
const Screen = {
  drawPort: createCanvas(width, height),
  renderPort: createCanvas(width * scale, height * scale, true),

  render() {
    const { scale } = config;
    const ctx = this.renderPort.ctx;
    ctx.save();
    ctx.scale(scale, scale);
    ctx.drawImage(this.drawPort.canvas, 0, 0);
    ctx.restore();
  },

  get renderCanvas() {
    return this.renderPort.canvas;
  },

  get ctx() {
    return this.drawPort.ctx;
  },
};

Screen.renderCanvas.focus();

export default Screen;
