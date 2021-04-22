const path = require("path");
const HTMLWebpackPlugin =  require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = {
    mode:'development',
    plugins:[
       new ModuleFederationPlugin({
           name:'container',
           remotes:{
               products:'products@http://localhost:8081/remoteEntry.js'
           }
       }),
        new HTMLWebpackPlugin({
            template:path.resolve(__dirname,"public","index.html")
        }),
    ],
    devServer:{
        port:8080
    }
}

