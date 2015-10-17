var vue = require('vue-loader')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/main.js',
  output: {
    publicPath: '/build/',
    filename: 'build.js'
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
    new ExtractTextPlugin('[name].css')
  ],
  devtool: '#source-map',
  postcss: function () {
    return [autoprefixer]
  }
}
