const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: "./src",
    publicPath: "/output"
  }
};
