const path = require('path')
const rootFolder = path.resolve(__dirname)

module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  },
  resolve: {
    root: rootFolder,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      rootFolder,
      'src/js'
    ]
  }
}
