var webpack = require('webpack')
var vue = require('vue-loader')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
var csswring = require('csswring')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: './build',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: vue.withLoaders({
        js: 'babel?optional[]=runtime',<% if (includeStylus) { %>
        stylus: ExtractTextPlugin.extract('css!postcss-loader!stylus'),<% } %>
        css: ExtractTextPlugin.extract('css!postcss-loader')
      }) },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?optional[]=runtime'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin('[name].min.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  postcss: function () {
    return [csswring({removeAllComments: true}), autoprefixer]
  }
}
