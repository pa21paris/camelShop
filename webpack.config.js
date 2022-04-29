const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:'production',
    entry: {
        main:'./src/index.ts',
        login:'./src/login.ts',
        register:'./src/register.ts',
        list:'./src/list.ts',
        camel:'./src/camel.ts',
        sell:'./src/sell.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css?/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public','index.html'),
            filename: 'index.html',
            chunks:['main'],
            inject:true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public','login.html'),
            filename: 'login.html',
            chunks:['login'],
            inject:true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public','register.html'),
            filename: 'register.html',
            chunks:['register'],
            inject:true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'public','list.html'),
            filename: 'list.html',
            chunks:['list'],
            inject:true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public','camel.html'),
            filename: 'camel.html',
            chunks:['camel'],
            inject:true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'public','sell.html'),
            filename: 'sell.html',
            chunks:['sell'],
            inject:true
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin.CleanWebpackPlugin()
    ],
    optimization:{
        minimize: true,
        minimizer:[
            new TerserWebpackPlugin(),
            new CssMinimizerWebpackPlugin()
        ]
    }
};
