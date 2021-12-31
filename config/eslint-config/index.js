module.exports = {
  extends: ['airbnb', 'plugin:cypress/recommended'],
  plugins: ['react-hooks'],
  rules: {
    'array-callback-return': 'off',
    'arrow-parens': 'off',
    'comma-dangle': ['error', 'never'],
    'func-names': ['warn', 'as-needed'],
    'func-style': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    'quote-props': ['error', 'as-needed'],
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  overrides: [{
    files: ['src/**/*.test*'],
    env: {
      jest: true,
    },
    globals: {
      cy: true
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'import/no-named-as-default': 'off',
      'react/prop-types': 'off'
    }
  }, {
    files: ['.storybook/**', 'src/**/*.stories.js?(x)', 'src/**/*.template.js?(x)'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off'
    }
  }]
};
