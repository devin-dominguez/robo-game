import { loadImage } from './utils';

const PATHS = {
  room: 'background.png',
  player_walk_left: 'player/walk_left.png',
  player_walk_right: 'player/walk_right.png',
  player_walk_back: 'player/walk_back.png',
  player_walk_front: 'player/walk_front.png',
};

const imagesPromise = Object.keys(PATHS).map(key => {
  const url = PATHS[key];
  const imagePromise = loadImage(`./assets/images/${url}`);

  return imagePromise.then(image => ({image, name: key}));
});


const images = {};

const loaded = Promise.all(imagesPromise).then(imageData => {
  imageData.forEach(data => {
    images[data.name] = data.image;
  });
});

export default {
  loaded,
  images
};
