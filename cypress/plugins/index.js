const { initPlugin } = require('cypress-plugin-snapshots/plugin');
const injectCraDevServer = require('@cypress/react/plugins/react-scripts');

module.exports = (on, config) => {
  initPlugin(on, config);
  injectCraDevServer(on, { ...config, addTranspiledFolders: ['.storybook'] });
  return config;
};
