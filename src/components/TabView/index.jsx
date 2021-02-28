import React from 'react'
import { renderRoutes } from 'react-router-config'
import FootTab from '../../pages/Home/components/FootTab'

const TabView =(props)=>{
  const {route} = props
  return (
    <>
    <FootTab></FootTab>
    {renderRoutes(route.routes)}
    </>
  )
}

export default TabView