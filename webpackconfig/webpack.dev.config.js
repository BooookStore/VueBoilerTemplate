const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const common = require('./common');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: common.outputDirectory,
    },
    mode: 'development',
});
