const path = require("path");
module.exports = {
    entry: {
        index: './public/js/index.js'
    },
    output: {
        path: path.resolve('./public/dist'),
        publicPath: '../dist/',
        filename: '[name]_bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};