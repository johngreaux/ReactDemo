var webpack = require("webpack")
var ExtractTextPLugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/ReactDemo/content/",
        filename: "bundle.js",
        //publicPath:  __dirname + "/content/"
    },
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'latest', 'stage-2']
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
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            }
        ]
    },
    // externals: {
    //     'react': 'React'
    // },
    plugins: [new ExtractTextPLugin("bundle.css")]
};