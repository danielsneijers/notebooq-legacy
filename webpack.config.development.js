const webpack = require('webpack')
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer')
const path = require('path')

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    './src/js/index'
  ],
  devtool: 'cheap-module-eval-source-map',
  module: {
    preLoaders: [
      // Javascript
      { test: /\.js?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\.png|\.svg$/,
      loaders: ['file-loader']
    }]
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: 'http://localhost:9000/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      path.resolve('./src/js')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

config.target = webpackTargetElectronRenderer(config)

module.exports = config
