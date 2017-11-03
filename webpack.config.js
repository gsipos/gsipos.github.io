const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new UglifyJSPlugin()
    ]
}