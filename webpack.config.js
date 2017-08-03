const path = require('path')

module.exports = {
    entry: {
        bundle: './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'www')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, './index.js'),
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
}