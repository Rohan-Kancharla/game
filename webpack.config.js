const path = require('path');

module.exports = {
  entry: './game.js',  // Entry point for your app
  output: {
    filename: 'bundle.js',  // Output bundle file
    path: path.resolve(__dirname, 'dist')  // Output directory
  },
  mode: 'production',  // Use 'development' for dev mode
};
