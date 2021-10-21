const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const { dependencies } = require('../package.json');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${process.env.PRODUCTION_DOMAIN}/marketing/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
});
