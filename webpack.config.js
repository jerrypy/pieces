const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: `${__dirname}/src/app/app.js`,
        vendor: [
            'react', 'react-dom', 'antd'
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: `${__dirname}/build`
    },

    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'pieces -- remember some pieces of you.',
            template: './build/index.tmpl.html'
        }),

        new webpack.HashedModuleIdsPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new ExtractTextPlugin("style.css")
    ]
};