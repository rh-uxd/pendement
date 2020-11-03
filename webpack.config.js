const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const publicDir = path.resolve(__dirname, './public');

module.exports = {
  entry: './src/entry.js',
  output: {
    publicPath: '/',
    path: publicDir,
    filename: '[name].[contenthash:7].bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: publicDir,
    compress: true,
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'page1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'page2.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'login.html'
    }),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
