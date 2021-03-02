import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.scss'
import { memo } from 'react'
import * as utils from '../../../../utils'

const CurrentAddr = (props) => {
  const { changeCity, address, changeAddress } = props
  // const [currentLocation, setCurrentLocation] = useState(city)

  let map = useRef(null)
  // let AMap = useRef(window.AMap)
  let AMap = window.AMap

  const init = useCallback(() => {
    // AMap.current = window.AMap
    map.current = new AMap.Map('map', {
      zoom: 11, //级别
      // viewMode: '3D', //使用3D视图
    })
  }, [AMap.Map])

  const relocate = useCallback(() => {
    // let AMap = window.AMap
    if (!map.current) {
      init()
    }

    //获取地址成功回调
    function onComplete(obj) {
      setLocationType(obj.location_type)
      changeCity(obj.addressComponent.city)
      let addr =
        obj.addressComponent.street + ' ' + obj.addressComponent.neighborhood
      changeAddress(addr)
    }
    utils.getLocation(map.current, onComplete)
  }, [init, map, changeAddress, changeCity])

  useEffect(() => {
    //进入页面时初始化一次
    init()
    // relocate()
  }, [init])

  const [locationType, setLocationType] = useState('')

  return (
    <div className={style.wrap}>
      <div className={style.head}>
        <div>当前地址</div>
        <div>定位方式：{locationType}</div>
      </div>
      <div className={style.content}>
        <Link to="/">{address}</Link>
        <div className={style.reLocate} onClick={relocate}>
          <i className={style.icon}></i>
          重新定位
        </div>
      </div>
      <div id="map" className={style.map}></div>
    </div>
  )
}

export default memo(CurrentAddr)
