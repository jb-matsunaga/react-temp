export default function() {
    let settings = {
        entry: {
            index: './src/js/index.js',
            filter: './src/js/filter.js',
            filterBank: './src/js/filterBank.js'
        },
        output: {
            path: __dirname,
            filename: '[name].min.js'
        },
        module: {
            loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
            ]
        },
        eslint: {
            configFile: './.eslintrc'
        }
    };
    return settings;
}
