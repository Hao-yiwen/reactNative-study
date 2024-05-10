// models/counter.js
export const counter = {
  state: {
    count: 0,
  }, // 初始状态
  reducers: {
    // 处理器函数，用于处理同步操作
    increment(state, payload) {
      return {
        count: state.count + payload,
      };
    },
  },
  effects: {
    // 用于处理异步操作和业务逻辑
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.increment(payload);
    },
  },
};
