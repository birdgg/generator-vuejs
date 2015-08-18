module.exports = {
  entry: {
    app: ['./src/main.js']
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
  devtool: 'source-map'
}
