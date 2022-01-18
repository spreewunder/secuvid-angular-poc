const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = config => {
  const angularDefaultOptimizer = config.optimization?.minimizer?.filter(
    (plugin) => plugin.constructor.name === 'JavaScriptOptimizerPlugin'
  )[0];
  return {
    ...config,
    optimization: {
      ...(config.optimization || {}),
      minimize: true,
      minimizer: [
        ...(config.optimization.minimizer || []).filter(
          (plugin) => plugin.constructor.name !== 'JavaScriptOptimizerPlugin'
        ),
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            sourceMap: angularDefaultOptimizer?.options.sourcemap,
            keep_classnames: true,
            keep_fnames: true
          }
        })
      ]
    }
  };
};
