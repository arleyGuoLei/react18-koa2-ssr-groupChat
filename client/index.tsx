
import React from 'react'
import { hydrateRoot, hydrate } from 'react-dom'
import App from '@client/app'

// hydrateRoot(document, <App />)

const container = document
hydrate(<App />, container)
