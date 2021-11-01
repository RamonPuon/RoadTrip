const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
    },

    resolve: {
        extensions: [".js",".jsx"],
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: "/node_modules/"
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader:"html-loader"
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    devServer: {
        allowedHosts: path.join(__dirname, "dist"),
        compress: true,
        port: 3005
    }
}