import Assets from './assets';
import Rooms from './data/rooms';
import Viewport from './viewport';
import { Room as state } from './state';
import { constrain } from './utils';


Assets.loaded.then(() => {
  const { images } = Assets;
  Object.keys(Rooms).forEach(key => {
    const room = Rooms[key];
    const image = images[room.background];
    room.image = image;
    room.width = image.width;
    room.height = image.height;
  });
});

const draw = () => {
  const { image } = state.current;
  const { ctx } = Viewport;

  ctx.drawImage(image, 0, 0);
};

export default {
  state,
  draw
};
