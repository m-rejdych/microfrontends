const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../package.json');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/marketing/latest/',
  },
  plugins: [
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
