const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer')
const path = require('path')

const config = {
  entry: [
    './src/js/index'
  ],

  module: {
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
  postcss: () => {
    return [
      require('postcss-import'),
      require('postcss-cssnext')({ browsers: 'last 3 Chrome versions' })
    ]
  },
  output: {
    path: path.join(__dirname, 'src/dist'),
    publicPath: '../dist/',
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      'src/js'
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: false
    })
  ]
}

config.target = webpackTargetElectronRenderer(config)

module.exports = config
