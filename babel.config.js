const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ]
    // isDev && require.resolve('react-refresh/babel')
  ].filter(Boolean)
}
