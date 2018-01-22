var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var homeData = require('./src/data/homeData');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            data: homeData,
            filename: 'index.html',
            template: './src/hbs/index.hbs'
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
            }
       ]
    },
    node: {
        fs: "empty"
    },
    stats: {
            colors: true
    },
    devtool: 'source-map'
};