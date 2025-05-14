// config/webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',

  // 1) Entry point
  entry: path.resolve(__dirname, '../src/index.js'),

  // 2) Output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true, // remove old files on rebuild
  },

  // 3) Source maps
  devtool: 'inline-source-map',

  // 4) Dev server + HMR
  devServer: {
    static: { directory: path.resolve(__dirname, '../dist') },
    hot: true,
    open: true,
    port: 8080,
  },

  // 5) Loaders
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Images (png|jpg|gif|svg)
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.9], speed: 4 },
            },
          },
        ],
      },
    ],
  },
};
