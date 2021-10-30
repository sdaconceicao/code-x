const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api) => {
  // to avoid caching issues
  api.assertVersion('^7.0.0');

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      "@babel/plugin-proposal-private-methods",
      ['@babel/plugin-proposal-object-rest-spread', {
        useBuiltIns: true
      }]
    ]
  };
});
