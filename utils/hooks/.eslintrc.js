module.exports = {
  env: {
    browser: true
  },
  extends: ['@code-x/eslint-config'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  }
};
