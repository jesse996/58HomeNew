import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import BlankLayout from '../layout/BlankLayout'

// import Home from '../pages/Home'
// import My from '../pages/My'
// import TabView from '../components/TabView'
// import Addr from '../pages/Addr'

const Home = lazy(() => import('../pages/Home'))
const My = lazy(() => import('../pages/My'))
const TabView = lazy(() => import('../components/TabView'))
const Addr = lazy(() => import('../pages/Addr'))

const SuspenseComponent = Component => props =>
  <Suspense fallback={<div>loading...</div>}>
    <Component {...props}></Component>
  </Suspense>





const routes = [{
  component: BlankLayout,
  routes: [
    {
      path: '/',
      exact: true,
      render: () => < Redirect to={"/home"} />,
      // component: Home
    },
    {
      path: '/home',
      component: SuspenseComponent(TabView),
      routes: [
        {
          path: '/home',
          exact: true,
          render: () => < Redirect to={"/home/main"} />,
          // component: Home
        },
        {
          path: '/home/main',
          component: SuspenseComponent(Home)
        }, {
          path: '/home/my',
          component: SuspenseComponent(My)
        }
      ]
    },
    {
      path: '/addr',
      component: SuspenseComponent(Addr)
    }
  ]
}]
export default routes