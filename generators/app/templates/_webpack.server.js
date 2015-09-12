var vue = require('vue-loader')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/main.js']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: vue.withLoaders({
        js: 'babel?optional[]=runtime',
        css: ExtractTextPlugin.extract('css!postcss-loader'),<% if (includeStylus) { %>
        stylus: ExtractTextPlugin.extract('css!stylus!postcss-loader')<% } %>
      }) },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?optional[]=runtime'}
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  }
}
