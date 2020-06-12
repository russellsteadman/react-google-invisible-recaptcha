var Path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  lib: Path.join(__dirname, '../dist'),
  src: Path.join(__dirname, './'),
  build: Path.join(__dirname, '../docs'),
  node_modules: Path.join(__dirname, '../node_modules')
};

const config = {
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.build,
    publicPath: './',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [ {
      test: /\.css$/,
      enforce: 'pre',
      loaders: [ 'postcss-loader' ],
      include: [ PATHS.lib, PATHS.src ]
    }, {
      test: /\.jsx?$/,
      loaders: [ 'babel-loader' ],
      include: [ PATHS.lib, PATHS.src ]
    } ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: Path.join( PATHS.src, 'index.html' )
    })
  ]
};

module.exports = config;
