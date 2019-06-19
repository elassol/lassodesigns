const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');


const BaseConfig = require('./base.config');

module.exports = Object.assign({}, BaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    contentBase: 'src',
    port: '8080',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      sourceMap: true,
    }),
    new CopyWebpackPlugin([
      { from: 'src/static/img', to: 'img' },
      { from: 'src/static/js', to: 'js' },
      { from: 'src/static/css', to: 'css' },
    ]),
    new Visualizer({
      filename: './stats.html',
    }),
  ],
});
