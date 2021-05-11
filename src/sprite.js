import Assets from './assets';
import Sprites from './data/sprites';
import Viewport from './viewport';

Assets.loaded.then(() => {
  const { images } = Assets;
  Object.keys(Sprites).forEach(key => {
    const sprite = Sprites[key];
    const image = images[sprite.image];
    sprite.image = image;
    sprite.frame = 0;
    sprite.animating = true;
    sprite.elpasedFrames = 0;
  })
});


const draw = (sprite, x, y) => {
  const { ctx } = Viewport;
  const { width, height, frameCount, frame, image } = sprite;
  ctx.drawImage(image, frame * width, 0, width, height, x, y, width, height);
};

const update = sprite => {
  const { frameRate, frameCount } = sprite;
  if (sprite.elpasedFrames >= frameRate) {
    sprite.elpasedFrames = 0;
    sprite.frame += 1;
    sprite.frame %= frameCount;
  } else {
    sprite.elpasedFrames++;
  }
};


export default {
  update,
  draw
};
