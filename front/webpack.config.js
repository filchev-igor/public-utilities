const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "development",
    resolve: {
        fallback: {
            "fs": false,
            "path": false,
            "os": false,
        },
    },
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "favicon.png",
        }),
        new Dotenv(),
    ],
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    { loader: 'style-loader' },
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            //importLoaders: 1
                        },
                    },
                    // Compiles Sass to CSS
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
};
