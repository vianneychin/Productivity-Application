import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StyledLanding } from './landing'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <StyledLanding />
      </Route>
      <Route path='/dashboard' />
    </Switch>
  </BrowserRouter>
)
