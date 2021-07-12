import * as webpack from 'webpack'
import * as path from 'path'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const resolve = (filepath: string) => (path.resolve(__dirname, filepath))

const config: webpack.Configuration = {
  mode: isDev ? 'development' : 'production',
  cache: {
    type: 'filesystem'
  },
  plugins: [
    new CleanWebpackPlugin()
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@server': resolve('./../server'),
      '@client': resolve('./../client')
    },
    extensions: ['.tsx', '.ts', '.js']
  }
}

export default config
