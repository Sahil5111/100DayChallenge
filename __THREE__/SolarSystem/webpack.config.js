const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: `[name][contenthash].js`,
        clean: true
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin(
        {
            template: "src/index.html"
        }
    )],
    devServer: {
        static: { directory: path.resolve(__dirname, "build") },
        port: 5500,
        open: true,
        hot: true,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: "asset/resource",
            }
        ]
    }
}