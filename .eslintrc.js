module.exports = {
  env: { browser: true, node: true, es2021: true },
  parser: '@babel/eslint-parser',
  extends: ['@react-native-community', 'plugin:react-native-a11y/ios'],
  rules: {
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
  },
};
