const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//https://stackoverflow.com/questions/49053215/webpack-4-how-to-configure-minimize
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    splitChunks: { /*
      cacheGroups: {
        commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
        }
      },
      minSize: 30000,
      maxAsyncRequests: 5,
      maxAsyncRequests: 3,
    */ },
    noEmitOnErrors: true,
    minimize: true,
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
  },
});