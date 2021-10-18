const path = require('path');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const { dependencies } = require('../package.json');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: {
      index: 'index.html',
    },
    contentBase: path.join(__dirname, '..', 'build'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:3001/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
});
