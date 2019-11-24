const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'assets/views/home/'),
    shop: path.resolve(__dirname, 'assets/views/shop/'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new WebpackAssetsManifest({
      publicPath: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'lazyStyleTag',
            },
          },
          'css-loader'],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
};
