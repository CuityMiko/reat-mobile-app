import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRoutes from './router'
import store from './store'
import './styles'

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('app')
)
