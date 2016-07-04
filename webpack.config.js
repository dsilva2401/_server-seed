var webpack = require('webpack');

module.exports = {
    entry: "./app/init.ts",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    target: 'node',
    module: {
        loaders: [
            { test: /\.json$/,  loader: 'json' },        
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: []
};