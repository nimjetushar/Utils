/* eslint-disable sort-keys */
const path = require('path'),
  webpack = require('webpack');

let libraryName = 'utils',
  entryFile = './index.js',
  outputFile,
  isMinified = false,
  isUmdBuild = false,
  libType = 'commonjs2';

const libComment = `/**
* @author Tushar Nimje
* @description Utility functions
*/
/* eslint-disable */`;

module.exports = env => {
  if (env && env.build_lib && env.build_lib === 'logger') {
    libraryName = 'logger';
    entryFile = './logger.js';
  }

  if (env && env.build_lib && env.build_lib === 'detect') {
    libraryName = 'detect';
    entryFile = './detect.js';
  }

  if (env && env.libType && env.libType === 'umd') {
    libType = 'umd';
    isUmdBuild = true;
  }

  if (env && env.build_type && env.build_type === 'prod') {
    libraryName += '.min';
    isMinified = true;
  }

  if (isUmdBuild) {
    outputFile = libraryName + '-umd.js';
  } else {
    outputFile = libraryName + '.js';
  }

  return {
    mode: 'production',
    entry: entryFile,
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: outputFile,
      library: libraryName,
      libraryTarget: libType,
      umdNamedDefine: true
    },
    optimization: {
      minimize: isMinified
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve('babel.config.js')
            }
          }
        },
        {
          test: /\.js$/,
          exclude: [/(node_modules)/, /(test)/, /(build)/],
          loader: 'eslint-loader'
        }
      ]
    },
    plugins: [new webpack.BannerPlugin({ banner: libComment, raw: true })]
  };
};
