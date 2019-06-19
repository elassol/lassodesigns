const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const BaseConfig = require('./base.config');

module.exports = Object.assign({}, BaseConfig, {
  output: Object.assign({}, BaseConfig.output, {
    filename: 'js/bundle.[name].[hash:8].js',
    chunkFilename: 'js/bundle.[name].[hash:8].js',
    publicPath: process.env.BUILD_PUBLIC_PATH,
  }),
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].style.[hash:8].css',
      sourceMap: true,
    }),
    new CopyWebpackPlugin([
      { from: 'src/static/img', to: 'img' },
      { from: 'src/static/js', to: 'js' },
      { from: 'src/static/css', to: 'css' },
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      sourceMap: true,
    }),
  ],
});
