const path = require('path');

module.exports = {
  entry: './src/js/index.js',  // Your main JS file
  output: {
    filename: 'bundle.js',      // Output JS file
    path: path.resolve(__dirname, 'assets/js'),  // Output path
  },
  module: {
    rules: [
      {
        test: /\.scss$/,  // For Sass files
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  mode: 'development',  // You can change to 'production' for minified output
};
