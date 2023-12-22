module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-typescript',
    ['@babel/preset-env', {targets: {node: 'current'}}],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './app/',
          '@/types': './types',
          '@__tests__': './__tests__',
          '@fastlane': './fastlane',
          '@environments': './environments',
          '@api': './app/api/',
          '@constants': './app/constants/',
          '@context': './app/context/',
          '@assets': './dist/assets/',
          '@components': './app/components',
          '@hooks': './app/hooks',
          '@navigations': './app/navigations',
          '@screens': './app/screens',
          '@store': './app/store',
          '@locales': './app/locales',
          '@styles': './app/styles',
          '@utils': './app/utils',
        },
      },
    ],
  ],
  exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
};
