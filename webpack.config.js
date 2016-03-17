var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./client/client.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
/*  resolve: {*/
    //extensions: ['', '.js', '.jsx']
  /*},*/
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacement(),
    new webpack.noErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/m,  
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      }
    ]
  }
};
