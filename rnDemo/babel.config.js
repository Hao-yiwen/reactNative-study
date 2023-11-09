// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'], // 你的源代码目录
        alias: {
          '@assets': './Assets',
          // 其他别名...
        },
      },
    ],
  ],
};
