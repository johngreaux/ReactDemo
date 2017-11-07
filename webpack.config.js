var webpack = require("webpack")
var ExtractTextPLugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/ReactDemo/content",
        filename: "bundle.js",
        publicPath: "content"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ["env"]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPLugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!autoprefixer-loader'
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPLugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!autoprefixer-loader!sass-loader'
                })
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [ new ExtractTextPLugin("bundle.css") ]
};