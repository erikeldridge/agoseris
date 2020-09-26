export default {
  external: ['vr'],
  input: 'src/index.js',
  output: {
    file: 'app/index.min.js',
    format: 'iife',
    globals: {
      'vr': 'Vaadin'
    }
  },
  plugins: [
  ]
};
