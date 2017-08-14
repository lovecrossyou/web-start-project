/**
 * Created by zhulizhe on 2017/8/14.
 */
var path = require('path');
module.exports = {
    entry: './public/index.js',
    output: {
        filename: 'out.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react'],
                        plugins: [['import', {"libraryName": "antd", "style": "css"}]]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
};