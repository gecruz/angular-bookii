let webpack = require('webpack')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let HtmlWebPackPlugin = require('html-webpack-plugin')
let path = require('path')

module.exports = {
  entry: {
    app: './app/app.js',
    vendor: './app/vendor.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new HtmlWebPackPlugin({
      template: 'index.html',
      favicon: './app/images/favicon.ico'
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    })
  ],
  module: {
    rules: [{
      test: /\.html$/,
      include: path.resolve(__dirname, 'app/'),
      loader: `ngtemplate-loader?relativeTo=${__dirname}/app/!html-loader`
    }, {
      test: /\.index.html$/,
      exclude: path.resolve(__dirname, 'node_modules/'),
      use: 'html-loader?name=[name].[ext]'
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?sourceMap', 'sass-loader?sourceMap'],
        publicPath: '/dist'
      })
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
        publicPath: '/dist'
      })
    }, {
      test: /\.(png|jpeg|jpg|gif|ico)$/,
      include: path.join(__dirname, 'app/images/'),
      use: 'file-loader?name=images/[name].[ext]&context=app/images/'
    }, {
      test: /\.(woff|woff2|svg|eot|ttf)(\?.+)?$/i,
      use: 'file-loader?name=[name].[ext]'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    inline: true,
    compress: true,
    stats: { colors: true },
    clientLogLevel: 'info'
  },
  watchOptions: {
    aggregateTimeout: 300,
    ignored: path.resolve(__dirname, 'node_modules/')
  },
  devtool: 'source-map'
}
