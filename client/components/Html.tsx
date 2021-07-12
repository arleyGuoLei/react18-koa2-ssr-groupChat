import React, { ReactNode } from 'react'

export default (
  { title = 'world group chat', children } :
  { title?: string, children: ReactNode}
) => {
  return (
    <html lang='zh-CN'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title}</title>
      </head>
      <body>
        {children}
        <script async src='http://localhost:1997/client/main.js' />
      </body>
    </html>
  )
}
