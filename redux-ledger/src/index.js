import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import configureStore from './redux/configureStore'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

injectGlobal`
  body {
    background: #2d2d2d;
    margin-bottom: 80px;
  }

  h1 {
    color: white;
  }
`

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
