var path = require('path');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    module:{
            loaders:[
                {
                    test:/\.css$/,
                    loaders:['style','css'],
                    include:APP_PATH
                }
            ],
            perLoaders:[
                {
                    test:/\.js?$/,
                    include:APP_PATH,
                    loader:'jshint-loader'
                }
            ]
        },
    devtool: 'eval-source-map',
};