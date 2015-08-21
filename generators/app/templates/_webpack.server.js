var vue = require('vue-loader')

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
        js: 'babel?optional[]=runtime'
      }) },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?optional[]=runtime'}
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  }
}
