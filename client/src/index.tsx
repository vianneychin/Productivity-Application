import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { GlobalStyles } from './styles/GlobalStyles'

render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById('root')
)
