const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/script.js',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./pages/index.pug"
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.json', '.png']
    },
    devServer: {
        port: 4200
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "pug-html-loader",
                        options: {
                            "pretty":true
                        }
                    }
                ]
            }
        ]
    }
};
