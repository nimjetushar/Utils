const path = require("path"),
  libraryName = "utils",
  outputFile = libraryName + ".js";

module.exports = {
  mode: "development",
  entry: "./utils.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};
