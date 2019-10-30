var path = require('path');

module.exports = {
    /* react의 소스 경로 설정 */
    context: path.resolve(__dirname, 'src/main/jsx'),
    /* 스크립트 빌드 */
    entry: {
        main: './MainPage.jsx',
        page1: './Page1Page.jsx'
    },
    /* 빌드한 결과 js 파일들을 아래 경로에 저장 */
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/webapp/js/react/[name].bundle.js'
    },
    mode: 'none',
    module: {
        rules: [{
            /* .jsx 파일들은 es6 javsScript 구문을 사용하며, 
            React 스크립트이다 */
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            /* .css 파일은 웹페이지내에 포함된다 */
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};