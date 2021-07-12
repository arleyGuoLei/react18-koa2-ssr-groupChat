import App from '@client/app'
import React from 'react'
import { renderToString } from 'react-dom/server'

export default () => {
  return renderToString(<App />)
}
