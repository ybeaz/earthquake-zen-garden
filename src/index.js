import ReactDom from 'react-dom'
import React, { useEffect } from 'react'

import { App } from './App'

const Index = () => {
  return <App />
}

const rootElement = document.getElementById('root')
ReactDom.render(<Index />, rootElement)
