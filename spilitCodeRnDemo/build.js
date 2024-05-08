const fs = require('fs');

const clean = function (file) {
  fs.writeFileSync(file, JSON.stringify({}), 'utf8');
};

const hasBuildInfo = function (file, path) {
  const cacheFile = require(file);
  return Boolean(cacheFile[path]);
};

const writeBuildInfo = function (file, path, id) {
  const cacheFile = require(file);
  cacheFile[path] = id;
  fs.writeFileSync(file, JSON.stringify(cacheFile), 'utf8');
};

const getCacheFile = function (file, path) {
  const cacheFile = require(file);
  return cacheFile[path] || 0;
};

const isPwdFile = path => {
  const cwd = __dirname.split('/').splice(-1, 1).toString();

  const pathArr = path.split('/');

  const map = new Map();

  const reverseMap = new Map();

  pathArr.forEach((item, index) => {
    map.set(item, index);
    reverseMap.set(index, item);
  });

  if (pathArr.length - 2 == map.get(cwd)) {
    return reverseMap.get(pathArr.length - 1).replace('.js', '');
  }

  return '';
};

module.exports = {
  clean,
  hasBuildInfo,
  writeBuildInfo,
  getCacheFile,
  isPwdFile,
};
