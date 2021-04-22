const path = require("path");
const HTMLWebpackPlugin =  require("html-webpack-plugin");

module.exports = {
    mode:'development',
    plugins:[
        new HTMLWebpackPlugin({
            template:path.resolve(__dirname,"public","index.html")
        }),
    ],
    devServer:{
        port:8081
    }
}

