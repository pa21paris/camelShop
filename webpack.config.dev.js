const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
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
    devServer: {
        open: true,
        static: path.join(__dirname, 'dist'),
        port: 3000,
        compress: true
    }
};
