// store.js
import {init} from '@rematch/core';
import * as models from './models/index'; // 假设你的模型定义在这个目录下

const store = init({
  models,
  plugins: [], // 可以添加更多插件
});

export default store;
