const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");


console.log("Using custom partial webpack config");

module.exports = (config, options, targetOptions) => {
    //config.optimization.minimizer.minimize = true;
    return config;
};
