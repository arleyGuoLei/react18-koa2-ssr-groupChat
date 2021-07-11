import App from '@client/app'
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'

export default () => {
  return renderToNodeStream(<App />)
}
