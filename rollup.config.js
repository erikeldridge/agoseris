import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'app/index.min.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve()
  ]
};
