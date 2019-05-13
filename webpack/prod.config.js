const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BaseConfig = require('./base.config');

module.exports = Object.assign({}, BaseConfig, {
  output: Object.assign({}, BaseConfig.output, {
    filename: 'js/[name].bundle.[contenthash:8].js',
    chunkFilename: 'js/[name].bundle.[contenthash:8].js',
    publicPath: process.env.BUILD_PUBLIC_PATH,
  }),
  mode: 'production',
  devtool: 'source-map',
  plugins: [

    new MiniCssExtractPlugin({
      filename: 'css/[name].style.[contenthash:8].css',
      sourceMap: true,
    }),
    new CopyWebpackPlugin([
      { from: 'src/static/img', to: 'img' },
      { from: 'src/static/js', to: 'js' },
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      sourceMap: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        cache: true,
        parallel: true,
      }),
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
