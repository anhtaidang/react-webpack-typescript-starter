// production config
const { merge } = require("webpack-merge");
const paths = require("../paths");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: paths.build,
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [],
});
