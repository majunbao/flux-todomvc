const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  // resolve: {
  //   alias: {
  //     'react': 'react/dist/react.min.js',
  //     'react-dom': 'react-dom/dist/react-dom.min.js'
  //   }
  // },
  devServer: {
    // contentBase: '.',
    inline: true
  }
}