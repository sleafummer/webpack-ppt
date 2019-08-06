const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    hotOnly: true,
    open: true
  },
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            'url-loader',
            options: {
              limit: 10240
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
  ]
};
