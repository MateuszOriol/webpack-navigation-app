const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ... other configurations
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

