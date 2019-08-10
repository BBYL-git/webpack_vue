const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");


module.exports = {
    mode : "production",
    entry : {
        app : "./src/index.js"
    },
    module: {
        rules : [
            {
                test : /\.vue$/,
                use : ["vue-loader"]
            },
            {
                test : /\.css$/,
                use : ["vue-style-loader","css-loader"]
            },
            {
                test : /\.scss/,
                use :["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    output : {
        path : path.join(__dirname,'../','dist'),
        filename : '[name].[hash:6].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer:{
        host : 'localhost',
        port : '8080',
        open : true,
        hot : true
    } 
}