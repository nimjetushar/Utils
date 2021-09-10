const path = require('path'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin');;

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    index: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader'
      // }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        'README.md',
        'LICENSE'
      ]
    })
  ]
};
