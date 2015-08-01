module.exports = {
  entry: "./src/main.js",
  output: {
    path: './build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.vue$/, loader: "vue-loader" },
    ]
  }
};