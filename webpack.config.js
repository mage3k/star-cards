var webpack = require('webpack')

var publicPath = '/build/'

module.exports = {
  entry: {
    app: ['./index.js'],
    vendor: ['vue', 'vuex'],
  },
  output: {
    path: __dirname + publicPath,
    filename: 'app.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: function(info) {
      return info.resource;
    }
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime'],
  },
  devtool: 'source-map',
  debug: true
}