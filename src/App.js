import React, { useEffect, useState } from 'react'
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom'

import { Header } from './Header'
import { Home } from './Home'
import { Detail } from './Detail'
import { Profile } from './Profile'
import './commonStyles.css'

export const App = () => {
  const [dataState, setDataState] = useState({
    data: { features: [], metadata: { title: '' } },
    profile: { firstName: '' },
    site: { title: '' },
  })

  useEffect(() => {
    fetch('./src/data.json')
      .then(res => res.json())
      .then(data => {
        setDataState(data)
      })
  }, [])

  // console.info('App  [25]', { dataState })
  return (
    <div>
      <BrowserRouter>
        <Header {...dataState} />
        <Switch>
          <Route
            exact
            path='/'
            component={routeProps => (
              <Home data={dataState} routeProps={routeProps} />
            )}
          />
          <Route
            exact
            path='/home'
            component={routeProps => (
              <Home data={dataState} routeProps={routeProps} />
            )}
          />
          <Route
            exact
            path='/detail'
            component={routeProps => (
              <Detail data={dataState} routeProps={routeProps} />
            )}
          />
          <Route
            exact
            path='/profile'
            component={routeProps => (
              <Profile data={dataState} routeProps={routeProps} />
            )}
          />
          {/* getRedirects() */}
          {/* getRoutes() */}
          <Route component={<div>Error404Page</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
