const path = require('path');

module.exports = {
    stories: [
       '../stories/**/*.stories.(js|mdx)',
       '../../../components/**/*.stories.(js|mdx)',
       '../../../utils/**/*.stories.(js|mdx)',
    ],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-actions'
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
          test: /.jsx?$/,
          exclude: /node_modules\/(?!@code-x\/*)/,
          resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
              'core-js/modules': path.resolve(
                __dirname,
                '..',
                'node_modules/core-js/modules'
              ),
              'react': path.join(__dirname, '..', '..', '..', 'node_modules', 'react')}
          }
        });
        config.resolve.alias = {
          ...config.resolve.alias,
          ...{
            'react': path.join(__dirname, '..', '..', '..', 'node_modules', 'react'),
            'react-dom': path.join(__dirname, '..', '..', '..', 'node_modules', 'react-dom')
          }
        }
        return config;
      }
}
