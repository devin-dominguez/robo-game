export const loadData = (data, itemClass, extraData = {}) => Object.keys(data)
  .reduce((collection, name) => {
    if (!collection.all) {
      collection.all = [];
    }

    const params = data[name];
    const item = new itemClass({ name, ...params, ...extraData });

    collection[name] = item;
    collection.all.push(item);

    return collection;
  }, {});
