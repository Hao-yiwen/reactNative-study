module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
  assets: ['./assets/fonts'],
  commands: [
    {
      name: 'foo-command',
      func: () => console.log('It worked------'),
    },
  ],
};
