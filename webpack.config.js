const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const apiUrl = process.env.API_URL || "http://localhost";
const apiPort = process.env.API_PORT || 5555;

let pathsToClean = ["dist"];

let cleanOptions = {};

module.exports = {
  entry: "./src/client/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": `${apiUrl}:${apiPort}`
    }
  }
};