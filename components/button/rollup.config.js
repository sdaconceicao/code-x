import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const { name, peerDependencies, dependencies } = pkg;

const createUMDName = packageName => packageName
  .replace('@', '')
  .replace('/', '-')
  .split('-')
  .map((value, index) => (index ? value[0].toUpperCase() + value.slice(1) : value))
  .join('');

const umdName = createUMDName(name);

export default {
  input: 'src/index.js',
  output: [{
    format: 'esm',
    file: 'dist/esm/index.js',
    sourcemap: true
  }, {
    format: 'cjs',
    file: 'dist/cjs/index.js',
    sourcemap: true
  }, {
    format: 'umd',
    file: 'dist/umd/index.js',
    name: umdName,
    globals: {
      ...Object.keys(peerDependencies)
        .filter(packageName => packageName.startsWith('@code-x'))
        .reduce((memo, packageName) => ({
          ...memo, [packageName]: createUMDName(packageName)
        }), {}),
      'prop-types': 'PropTypes',
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  }],
  external: Object.keys(peerDependencies).concat(Object.keys(dependencies || {})),
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.jsx']
    })
  ]
};
