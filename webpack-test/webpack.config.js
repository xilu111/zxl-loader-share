const path = require("path")
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[{
            test: /\.js$/i,
            use: [{
                    loader: "zxl-loader",
                    options:{
                        name: 'Tuesday'
                    }
                }]
            // use:[{
            //     loader: path.resolve("../zxl-loader/index.js")
            // }]
        }]
    }
}