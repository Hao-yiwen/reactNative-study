const {hasBuildInfo, writeBuildInfo, clean} = require('./build');

function createModuleIdFactory() {
  console.log('init common -------->');
  const fileToMap = new Map();

  let nextId = 0;

  clean('./config/bundleCommonInfo.json');

  return path => {
    let id = fileToMap.get(path);

    if (typeof id !== 'number') {
      id = nextId++;
      fileToMap.set(path, id);

      !hasBuildInfo('./config/bundleCommonInfo.json', path) &&
        writeBuildInfo('./config/bundleCommonInfo.json', path, id);
    }

    return id;
  };
}

module.exports = {
  serializer: {
    createModuleIdFactory,
  },
};
