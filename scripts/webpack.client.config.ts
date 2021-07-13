import baseConfig from './webpack.base.config'
import webpack from 'webpack'
import path from 'path'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

import { merge } from 'webpack-merge'

const isDev = process.env.NODE_ENV === 'development'
const resolve = (filepath: string) => (path.resolve(__dirname, filepath))

const config: webpack.Configuration = {
  entry: resolve('./../client/index.tsx'),
  target: 'web',
  output: {
    path: resolve('./../dist/client/'),
    filename: '[name].js'
  },
  plugins: [
    isDev && new WebpackBar({
      name: 'client',
      color: '#4587EF'
    }),
    new MiniCssExtractPlugin(), // 抽离css为单独文件

    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshPlugin(),

    new WebpackManifestPlugin({
      writeToFileEmit: true,
      fileName: `manifest.json`
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader'
            : { // 抽离css为单独文件
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false
              }
            },
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
  }
}

export default merge(baseConfig('client'), config)
