var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'lotusjs-mvw-UMD': './src/index.ts',
        'lotusjs-mvw-UMD.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'LotusMVW',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    externals: {
        "lavenderjs/lib": "Lavender",
        "lotusjs-components/lib": "Lotus"
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            query: {
                declaration: false,
            }
        }]
    }
};