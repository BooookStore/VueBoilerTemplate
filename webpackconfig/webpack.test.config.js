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
    // テストはNode環境で実行されるため、Nodeライブラリへの依存を外部化し実行を高速化
    externals: [nodeExternals()]
});
