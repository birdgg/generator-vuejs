module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./src/main.js"]
  },
  output: {
    path: './build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build'
  }
}