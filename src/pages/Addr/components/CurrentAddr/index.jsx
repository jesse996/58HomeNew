import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.scss'
import { memo } from 'react'
import * as utils from '../../../../utils'

const CurrentAddr = (props) => {
  const { changeCity, changeAddress } = props
  const [locationType, setLocationType] = useState('')
  // const [currentLocation, setCurrentLocation] = useState(city)
  const [address, setAddress] = useState('')

  let map = useRef(null)
  let geolocation = useRef(null)
  // let AMap = useRef(window.AMap)
  let AMap = window.AMap

  const init = useCallback(() => {
    return new Promise((resolve, reject) => {
      console.log('init map')
      map.current = new AMap.Map('map', {
        zoom: 11, //级别
        // viewMode: '3D', //使用3D视图
      })
      AMap.plugin(['AMap.Geolocation'], () => {
        geolocation.current = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 10000, // 超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, // 显示定位按钮，默认：true
          position: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：fal
          // needAddress: true, // 地址逆编码,失败不会报错，会一直等待，所以不用这个
          // noIpLocate: 0, //是否禁用IP精确定位，默认为0，0:都用 1:手机上不用 2:PC上不用 3:都不用
          // noGeoLocation: 2, //是否禁用浏览器原生定位，默认为0，0:都用 1:手机上不用 2:PC上不用 3:都不用
          useNative: true, //是否与高德定位SDK能力结合，需要同时使用安卓版高德定位sdk，否则无效
          getCityWhenFail: true, //定位失败之后是否返回基本城市定位信息
        })

        map.current.addControl(geolocation.current)
        resolve()
      })
    })
  }, [AMap])

  //获取地址成功回调
  const onComplete = useCallback(
    (obj) => {
      console.log(obj)
      setLocationType(obj.location_type)
      changeCity(obj.addressComponent.city)
      let addr =
        obj.addressComponent.street + ' ' + obj.addressComponent.neighborhood
      changeAddress(addr)
      setAddress(addr)
    },
    [changeAddress, changeCity]
  )

  //获取地址失败回调
  const onError = useCallback(() => {
    console.log('定位失败')
    setLocationType('html5')
    changeCity('未知')
    changeAddress('定位失败')
    setAddress('定位失败')
  }, [changeAddress, changeCity])

  const relocate = useCallback(() => {
    console.log('relocate')
    utils.getLocationWithGeo(geolocation.current, onComplete, onError)
  }, [onComplete, onError])

  useEffect(() => {
    //进入页面时初始化一次
    init().then(() => {
      utils.getLocationWithGeo(geolocation.current, onComplete, onError)
    })
  }, [init, onComplete, onError])

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
