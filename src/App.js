import React, { Suspense, useEffect, useState } from 'react'
import {
  BrowserRouter,
  Router,
  Route,
  Redirect,
  StaticRouter,
  Switch,
} from 'react-router-dom'

import { Header } from './Header'
import { Home } from './Home'
import { Detail } from './Detail'
import { Profile } from './Profile'
import styles from './App.css'

const Error404Page = props => {
  return <div>Error404Page</div>
}

const PAGES = {
  Home,
  Detail,
  Profile,
}

export const App = () => {
  const [dataState, setDataState] = useState({
    data: { features: [], metadata: { title: '' } },
    profile: { firstName: '' },
    site: { title: '' },
    rootPath: '',
  })
  console.info()
  useEffect(() => {
    const apiUrl =
      location.host === '127.0.0.1:3420'
        ? '../public/data.json'
        : location.host === 'r1.userto.com'
        ? 'https://r1.userto.com/dist/EarthquakeZenGarden/data.json'
        : '../public/data.json'

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setDataState(data)
      })
      .catch(error => {
        fetch('../public/data.json')
          .then(res => res.json())
          .then(data => {
            setDataState(data)
          })
      })
  }, [])

  const rootPath =
    location.hostname !== 'r1.userto.com'
      ? ''
      : '/demo-earthquake-zen-garden-js.html'

  const urlPrev = `${location.protocol}//${location.host}${location.pathname}`
  const isRedirectRoot = location.pathname === '' || location.pathname === '/'
  const isRedirectUrl =
    urlPrev.endsWith('/demo-earthquake-zen-garden-js.html') ||
    location.pathname === '/demo-earthquake-zen-garden-js.html' ||
    location.pathname ===
      '/C:/Data/Dev/CodingAssignmentTasks/210204-earthquake-zen-garden/demo-earthquake-zen-garden-js.html'
  const slash = isRedirectRoot ? '' : isRedirectUrl ? '/' : '/'

  const { router } = {
    router: {
      routes: [
        { path: '/', exact: true, page: 'Home' },
        { path: 'home', exact: true, page: 'Home' },
        { path: 'detail', exact: true, page: 'Detail' },
        { path: 'profile', exact: true, page: 'Profile' },
      ],
      redirects: [
        { from: `${rootPath}`, to: `${rootPath}${slash}home`, exact: true },
      ],
    },
  }

  const { routes, redirects } = router

  const getRedirects = () =>
    redirects.map(redirect => {
      const { from, to: pagePart, exact } = redirect
      const to = `/${rootPath}/${pagePart}`
      return (
        <Route key={from} {...{ path: from, exact }}>
          <Redirect {...{ from, to }} />
        </Route>
      )
    })

  const getRoutes = () =>
    routes.map((route, i) => {
      const { path: pagePath, exact, page } = route
      const Page = PAGES[page]
      const path = `${rootPath}${slash}${pagePath}`
      return (
        <Route
          exact={exact}
          path={path}
          component={routeProps => {
            return (
              <Page
                data={dataState}
                rootPath={rootPath}
                slash={slash}
                routeProps={routeProps}
              />
            )
          }}
        />
      )
    })

  const isError404Page =
    !isRedirectRoot &&
    !isRedirectUrl &&
    !(urlPrev.endsWith('home') && urlPrev.split('home').length < 3) &&
    !(urlPrev.endsWith('detail') && urlPrev.split('detail').length < 3) &&
    !(urlPrev.endsWith('profile') && urlPrev.split('profile').length < 3)

  const headerProps = Object.assign(dataState, { rootPath, slash })

  return (
    <div>
      <BrowserRouter>
        <Header {...headerProps} />
        <div className='App__title'></div>
        <Switch>
          {isRedirectRoot || isRedirectUrl ? (
            <Redirect
              {...{
                exact: true,
                from: `${rootPath}`,
                to: `${rootPath}${slash}home`,
              }}
            />
          ) : null}

          {getRoutes()}

          {isError404Page ? (
            <Route
              component={() => {
                console.info('App [160] ', {
                  isError404Page,
                  urlPrev,
                })
                return <Error404Page />
              }}
            />
          ) : null}
        </Switch>
      </BrowserRouter>
      <div className='App__schema_wrapper'>
        <img
          className='App__schema_img'
          src='https://r1.userto.com/img/earthquake-zen-garden-screens.png'
          alt='schema'
        />
      </div>
    </div>
  )
}
