/* eslint-disable */
const common = require('./common');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

// noinspection JSUnresolvedFunction
module.exports = {
    entry: {
        index: './src/index.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: common.outputDirectory,
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        modules: ['node_modules', 'src'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                loader: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        // Vueによって使用されるHTMLファイルを指定
        // todo : 複数ファイルに対応する
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
    externals: [nodeExternals()]
};
