// development config
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");
const paths = require("../paths");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "@babel/polyfill",
    "./index.tsx", // the entry point of our app
  ],
  devServer: {
    hot: true, // enable HMR on the server
    open: false,
    compress: true,
    port: 9999,
    contentBase: paths.build,
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
});
