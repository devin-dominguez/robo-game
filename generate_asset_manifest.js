const fs = require('fs');
const path = require('path');

// adapted from https://stackoverflow.com/a/16684530
const walk = dir =>{
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(walk(file));
    } else {
      /* Is a file */
      results.push(file);
    }
  });
  return results;
}


const MANIFEST_PATH = './src/data/asset_manifest.json';
module.exports = () => {
  const ASSET_PATH = path.resolve(__dirname, './dist/assets');
  const files = walk(ASSET_PATH).map(file => file.replace(ASSET_PATH, '.'));
  const json = JSON.stringify(files);
  try {
    const current = fs.readFileSync(MANIFEST_PATH).toString();
    if (current !== json) {
      fs.writeFileSync(MANIFEST_PATH, json);
    }
  } catch (e) {
      fs.writeFileSync(MANIFEST_PATH, json);
  }
};
