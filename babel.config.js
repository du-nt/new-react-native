module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@navigators': './src/navigators',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@screens': './src/screens',
          '@store': './src/store',
          '@types': './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
