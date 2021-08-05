import AssetManifest from './asset_manifest.json';

const assets = {};
const promises = [];

AssetManifest.forEach(path => {
  const parts = path.split('/');
  parts.shift(); // get rid of .
  const src = './assets/' + parts.join('/');

  let chunk = assets;
  while (parts.length > 1) {
    const currentPart = parts.shift();
    if (typeof chunk[currentPart] === 'undefined'){
      chunk[currentPart] = {};
    }
    chunk = chunk[currentPart];
  }
  const name = parts[0].split('.').shift();
  promises.push(
    new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      chunk[name] = image;
      image.addEventListener('load', () => resolve() );
    })
  );
});

export const loaded = Promise.all(promises);

export const getAsset = path => {
  const parts = path.split('.');
  let node = assets;
  while (parts.length) {
    node = node[parts.shift()];
  }

  return node;
}
