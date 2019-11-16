import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    channel_orange: '#ff7e30',
    soft_white: 'rgb(240, 240, 240)'
  }
}

render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <App />
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root')
)
