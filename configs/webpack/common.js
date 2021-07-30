// shared config (dev and prod)
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const paths = require("../paths");

module.exports = {
  context: paths.src,
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
      //     "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
      //   ],
      // },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          context: "src", // prevent display of src/ in filename
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html.ejs" }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/assets/images`,
          to: `${paths.build}/assets/images`,
        },
      ],
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "~": paths.src,
    },
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
