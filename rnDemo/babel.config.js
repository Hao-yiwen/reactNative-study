// babel.config.js
module.exports = {
  presets: [require.resolve('@react-native/babel-preset')],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
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
    // ['transform-remove-console', {exclude: ['error']}],
    // ['transform-react-remove-prop-types'],
    // ['lodash'],
    // // ['minify-dead-code-elimination'],
    // // ['babel-plugin-transform-remove-undefined'],
    // ['transform-remove-debugger'],
    // [
    //   'import',
    //   {
    //     libraryName: 'ahooks',
    //     camel2DashComponentName: false, // 是否需要驼峰转短线
    //     camel2UnderlineComponentName: false, // 是否需要驼峰转下划线
    //   },
    // ],
    // [
    //   'transform-remove-imports',
    //   {
    //     modules: ['unused-module'],
    //   },
    // ],
  ],
};
