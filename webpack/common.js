const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "app.min.js",
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
      React: "react"
    }),
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: "({ isDisabled: true })"
    })
  ],
  resolve: {
    extensions: [".js", '.json', 'jsx'],
  },
};
