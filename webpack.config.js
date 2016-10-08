
module.exports = {

    entry: {
        vendors: [
            'react',
            'react-dom',
            // 'react-tap-event-plugin',
            'redux',
            // 'redux-thunk',
            'react-redux',
            // 'material-ui',
        ],
        main: './js/bootstrap.js'
    },

    output: {
        path: './build',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.jsx', '.js'],
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    }
};
