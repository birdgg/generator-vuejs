var webpack = require('webpack')
var vue = require('vue-loader')

module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: './build',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: vue.withLoaders({
        js: 'babel?optional[]=runtime'
      }) },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?optional[]=runtime'}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
