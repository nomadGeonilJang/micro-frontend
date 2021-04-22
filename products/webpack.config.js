const path = require("path");
const HTMLWebpackPlugin =  require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode:'development',
    plugins:[
        new ModuleFederationPlugin({
            name:'products',
            filename:'remoteEntry.js',
            exposes:{
                './ProductsIndex':'./src/index.js'
            }
        }),
        new HTMLWebpackPlugin({
            template:path.resolve(__dirname,"public","index.html")
        }),
    ],
    devServer:{
        port:8081
    }
}

