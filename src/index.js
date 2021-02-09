import ReactDom from 'react-dom'
import React from 'react'

import { App } from './App'

const Index = () => {
  return <App />
}

// const a = { x: 1, y: 2 }
// const b = { ...a, y: 3 }
// const c = [1, 2, 3]
// const d = [...c, 3, 4, 5]

const rootElement = document.getElementById('root')
ReactDom.render(<Index />, rootElement)
