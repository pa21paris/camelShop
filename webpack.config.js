const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
            inject:true,
            template: path.join(__dirname, 'public','index.html'),
            filename: 'index.html'
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
