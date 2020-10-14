import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'build/index.js',
  output: {
    file: 'app/index.min.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
