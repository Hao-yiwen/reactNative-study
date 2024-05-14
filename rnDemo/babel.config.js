// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // 你的源代码目录
        alias: {
          '@assets': './src/Assets',
          '@src': './src',
          '@Views': './src/Views',
          // 其他别名...
        },
      },
    ],
  ],
};
