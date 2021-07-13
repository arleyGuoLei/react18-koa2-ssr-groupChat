import baseConfig from './webpack.base.config'
import webpack from 'webpack'
import path from 'path'

const WebpackBar = require('webpackbar')
const NodemonPlugin = require('nodemon-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

import { merge } from 'webpack-merge'

const isDev = process.env.NODE_ENV === 'development'
const resolve = (filepath: string) => (path.resolve(__dirname, filepath))

const outputPath = resolve('./../dist/server/')

const config: webpack.Configuration = {
  entry: resolve('./../server/index.ts'),
  target: 'node',
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  plugins: [
    isDev && new NodemonPlugin({
      script: `${outputPath}/main.js`,
      watch: outputPath
    }),
    isDev && new WebpackBar({
      name: 'server',
      color: '#F3CF60'
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    // minimize: true,
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}

export default merge(baseConfig('server'), config)
