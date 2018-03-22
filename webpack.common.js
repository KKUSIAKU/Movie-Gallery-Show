const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const cleanDocsFolder = new CleanWebpackPlugin(["docs"]);
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: "Production",
  template: __dirname + "/index.html",
  filename: "index.html",
  inject: "body",
});

const extractSass = new ExtractTextPlugin({
  /*filename: "[name].[contenthash].css",*/
  filename:"style.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader", 
              options: { sourceMap: true,}
            },
            {
              loader: "sass-loader",
              options: {  sourceMap: true, }
            }
          ],
          fallback: "style-loader"
        })
      },

      {
        test: /\.(png|jpeg|jpg)$/,
        use: [
          { loader: "file-loader" }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: "babel-loader"
      },
    ]
  },

  plugins: [
    cleanDocsFolder,
    HtmlWebpackPluginConfig,
    extractSass
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs")
  }
};
