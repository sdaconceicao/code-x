const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.(ts|js|mdx)',
    '../../../components/**/*.stories.(ts|js|mdx)',
    '../../../utils/**/*.stories.(ts|js|mdx)'
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-actions'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    esModuleInterop: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
    }
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules\/(?!@code-x\/*)/,
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          'core-js/modules': path.resolve(__dirname, '..', 'node_modules/core-js/modules'),
          react: path.join(__dirname, '..', '..', '..', 'node_modules', 'react')
        }
      }
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        react: path.join(__dirname, '..', '..', '..', 'node_modules', 'react'),
        'react-dom': path.join(__dirname, '..', '..', '..', 'node_modules', 'react-dom')
      }
    };
    return config;
  }
};
