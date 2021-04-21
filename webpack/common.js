const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./index.js",
  },
  output: {
    filename: "jquery-bootstrap-build.js",
    path: path.resolve("./build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          { loader: "babel-loader" }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './assets'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new webpack.ProvidePlugin({
      // Tabulator: ['tabulator-tables/src/js/core.js', 'Tabulator'],
      jQuery: path.resolve("./libs/jquery"),
      $: path.resolve("./libs/jquery"),
    }),
  ],
  resolve: {
    extensions: [".js", '.json'],
  },
};
