var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');
var path = require('path');
var data = require('./src/data/data');

module.exports = {

    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html'
        })
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
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader?name=./img/[name].[ext]'  // <-- retain original file name
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader?mimetype=image/svg+xml'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file-loader?mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file-loader?mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file-loader?mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file-loader"
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
    
}