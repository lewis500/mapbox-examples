var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: "#inline-source-map",
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      include: path.join(__dirname, 'src'),
      loaders: ['style', 'css']
    }]
  },
  resolve: {
    root: [path.resolve('src')],
    extensions: ['', '.js', '.css','.json']
  },
  node: {
    fs: "empty"
  }
};
