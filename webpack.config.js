const path = require("path");
let libraryName = "utils",
  entryFile = "./utils.js",
  outputFile,
  isMinified = false;

module.exports = env => {
  if (env && env.build_lib && env.build_lib === "logger") {
    libraryName = "logger";
    entryFile = "./logger.js";
  }

  if (env && env.build_type && env.build_type === "prod") {
    libraryName += ".min";
    isMinified = true;
  }

  outputFile = libraryName + ".js";

  return {
    mode: "development",
    entry: entryFile,
    output: {
      path: path.resolve(__dirname, "build"),
      filename: outputFile,
      library: libraryName,
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    optimization: {
      minimize: isMinified
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
};
