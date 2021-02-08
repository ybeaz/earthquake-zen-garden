const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map', // 'source-map'
  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 3420,
    inline: true,
    overlay: true,
    stats: {
      colors: true,
      chunks: false,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      children: false,
      source: false,
      warnings: false,
      noInfo: true,
      contentBase: './public',
      hot: true,
      errors: true,
      modules: true,
      reasons: true,
      errorDetails: true,
    },
  },
  plugins: [
    new ESLintPlugin({
      files: 'src/**/*.(js|jsx|ts|tsx)',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      configFile: '.eslintrc.json',
      lintDirtyModulesOnly: true,
      emitError: true,
      emitWarning: true,
      failOnError: false,
      failOnWarning: false,
    }),
    // new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin({}),
  ],
})
