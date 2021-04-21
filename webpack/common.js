const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./index.js",
  },
  output: {
    filename: "tabulator-build.js",
    path: path.resolve("./build"),
  },
  module: {
    rules: [
      {
        test: require.resolve('../node_modules/tabulator-tables/src/js/row.js'),
        loader: 'exports-loader',
        options: {
          exports: 'RowComponent,Row',
        },
      },
      {
        test: require.resolve('../node_modules/tabulator-tables/src/js/row_manager.js'),
        loader: 'exports-loader',
        options: {
          exports: 'RowManager',
        },
      },
      {
        test: require.resolve('../node_modules/tabulator-tables/src/js/footer_manager.js'),
        loader: 'exports-loader',
        options: {
          exports: 'FooterManager',
        },
      },
      {
        test: require.resolve('../node_modules/tabulator-tables/src/js/vdom_hoz.js'),
        loader: 'exports-loader',
        options: {
          exports: 'VDomHoz',
        },
      },
      {
        test: require.resolve('../node_modules/tabulator-tables/src/js/cell.js'),
        loader: 'exports-loader',
        options: {
          exports: 'CellComponent,Cell',
        },
      },
      {
        test: require.resolve('../node_modules/tabulator-tables/src/js/column.js'),
        loader: 'exports-loader',
        options: {
          exports: 'ColumnComponent,Column',
        },
      },
      {
        test: require.resolve('../node_modules/tabulator-tables/src/js/column_manager.js'),
        loader: 'exports-loader',
        options: {
          exports: 'ColumnManager',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new webpack.ProvidePlugin({
      RowComponent: ['tabulator-tables/src/js/row.js', 'RowComponent'],
      Row: ['tabulator-tables/src/js/row.js', 'Row'],
      RowManager: ['tabulator-tables/src/js/row_manager.js', 'RowManager'],
      FooterManager: ['tabulator-tables/src/js/footer_manager.js', 'FooterManager'],
      VDomHoz: ['tabulator-tables/src/js/vdom_hoz.js', 'VDomHoz'],
      CellComponent: ['tabulator-tables/src/js/cell', 'CellComponent'],
      Cell: ['tabulator-tables/src/js/cell', 'Cell'],
      ColumnComponent: ['tabulator-tables/src/js/column', 'ColumnComponent'],
      Column: ['tabulator-tables/src/js/column', 'Column'],
      ColumnManager: ['tabulator-tables/src/js/column_manager.js', 'ColumnManager'],
    }),
  ],
  resolve: {
    extensions: [".js", '.json'],
  },
};
