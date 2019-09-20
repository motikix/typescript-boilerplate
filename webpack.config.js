const path = require('path')

module.exports = {
  mode: 'development',
  entry: './scripts/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      '@': path.resolve(__dirname, 'scripts'),
    },
  },
}
