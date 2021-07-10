import * as webpack from 'webpack'
import * as path from 'path'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const resolve = (filepath: string) => (path.resolve(__dirname, filepath))

const config: webpack.Configuration = {
  mode: isDev ? 'development' : 'production',
  entry: resolve('./../server/index.ts'),
  target: 'node',
  output: {
    path: resolve('./../dist'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

export default config
