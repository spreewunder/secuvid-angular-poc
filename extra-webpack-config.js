const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

console.log("Using custom partial webpack config");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        mangle: false,
        keep_classnames: true,
        compress: false,
      }
    })]
  }
}
