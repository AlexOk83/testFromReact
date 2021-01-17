const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'build.js'
    },
    resolve: {
        alias: {
            pages: path.resolve(__dirname, './src/pages'),
            common: path.resolve(__dirname, './src/common'),
        },
        extensions: [".ts", ".tsx", ".js", ".json", ".svg"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        compress: true,
        hot: true,
        progress: true,
        port: 3000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}

