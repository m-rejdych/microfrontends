const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const { dependencies } = require('../package.json');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3001,
    hot: true,
    historyApiFallback: {
      index: 'index.html',
    },
    contentBase: path.join(__dirname, '..', 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap.js',
      },
      shared: dependencies,
    }),
  ],
});
