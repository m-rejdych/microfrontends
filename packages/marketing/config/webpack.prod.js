const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../package.json');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      exposes: {
        './MarketingApp': './src/bootstrap.js',
      },
      shared: dependencies,
    }),
  ],
});
