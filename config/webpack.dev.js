const {merge} = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3000,
        compress: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new ESLintPlugin({
            extensions: ["js", "jsx"]
        }),
    ]
});