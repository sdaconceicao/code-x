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
  }
};
