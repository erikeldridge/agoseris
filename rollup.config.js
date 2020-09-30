import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'build/index.js',
  output: {
    file: 'app/index.min.js',
    format: 'iife'
  },
  plugins: [
    resolve()
  ]
};
