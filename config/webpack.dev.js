const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    entry: {
        hot: 'webpack/hot/dev-server.js',
    },
    devServer: {
        port: 3000,
        compress: true,
        hot: false,
        client: false,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});