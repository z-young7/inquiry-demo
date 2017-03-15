const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = { 
    entry: './src/js/entry.js', 
    output: { 
         path: resolve(__dirname, 'static'), 
         filename: 'entry.js' 
        }, 
         module: {
               rules: [ { 
                  test: /\.js$/, 
                  exclude: /node_modules/, 
                  loader: 'babel-loader' ,
                  query:{
                      presets:['react','es2015']
                  }
                  }, {
                  test: /\.html$/, 
                  use: 'html-loader'
                  }, { 
                  test: /\.css$/, 
                  use: ['style-loader', 'css-loader'] }, { 
                  test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/, 
                  use: [ { 
                      loader: 'url-loader', 
                      options: { limit: 10000 } 
                    } ] 
                } ] 
            },
            plugins: [ 
                new HtmlWebpackPlugin({  template: './index.html' }) 
                    ], 
                    devServer: { 
                        historyApiFallback: true 
                    } 
                } 