import React from 'react'
import { Redirect } from 'react-router-dom'
import BlankLayout from '../layout/BlankLayout'
import Home from '../pages/Home'
import My from '../pages/My'
import TabView from '../components/TabView'


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
      component: TabView,
      routes: [
        {
          path: '/home',
          exact: true,
          render: () => < Redirect to={"/home/main"} />,
          // component: Home
        },
        {
          path: '/home/main',
          component: Home
        }, {
          path: '/home/my',
          component: My
        }
      ]
    }
  ]
}]
export default routes