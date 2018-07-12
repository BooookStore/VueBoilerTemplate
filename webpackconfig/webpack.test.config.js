const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "inline-cheap-module-source-map",
    output: {
        devtoolModuleFilenameTemplate: "[absolute-resource-path]",
        devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]"
    },
    externals: [nodeExternals()]
});
