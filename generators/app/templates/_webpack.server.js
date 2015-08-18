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
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build'
  }
}
