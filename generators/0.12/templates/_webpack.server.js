var vue = require('vue-loader')
var autoprefixer = require('autoprefixer')

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
        js: 'babel?optional[]=runtime',<% if (includeStylus) { %>
        stylus: 'style!css!postcss-loader!stylus',<% } %>
        css: 'style!css!postcss-loader'
      }) },<% if (includeStylus) { %>
      { test: /\.styl$/, loader: 'style!css!postcss!stylus' }, <% } %>
      { test: /\.css$/, loader: 'style!css!postcss' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?optional[]=runtime'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  devtool: 'source-map',
  postcss: function () {
    return [autoprefixer]
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  }
}
