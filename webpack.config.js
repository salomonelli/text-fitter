const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'javascript.js',
    libraryTarget: 'var',
    library: 'TextFitter'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      options: {
        'presets': ['es2015']
      }
    }]
  }
};
