import { loadImage } from './utils';

const PATHS = {
  room: 'background.png',
  player: 'player.png'
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
