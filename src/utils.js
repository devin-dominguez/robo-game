export const loadImage = url => new Promise((resolve, reject) => {
  const image = new Image();
  image.src = url;
  image.addEventListener('load', e => {
    resolve(image);
  });
});

export const constrain = (min, max, value) => Math.min(max, Math.max(min, value));

