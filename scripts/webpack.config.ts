import * as webpack from 'webpack'
import * as path from 'path'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const resolve = (filepath: string) => (path.resolve(__dirname, filepath))

const EmitPach = resolve('./../dist')

const config: webpack.Configuration = {
  mode: isDev ? 'development' : 'production',
  entry: {
    server: resolve('./../server/index.ts')
  },
  target: 'node',
  output: {
    path: EmitPach,
    filename: '[name].js'
  },
  cache: {
    type: 'filesystem'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NodemonPlugin({
      script: resolve('./../dist/server.js'),
      watch: EmitPach
    })
  ],
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
