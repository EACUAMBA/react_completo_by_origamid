module.exports = {
    devServer: {
        static: './',
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // Quero tudo que termina com .js
                test: /\.js$/,
                //Ignore os arquivos que estão na pasta node_modules
                exclude: /node_modules/,
                //Use o babel-loader
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                }
            }
        ]
    }
}
