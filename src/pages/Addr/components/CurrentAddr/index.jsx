import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.scss'

const CurrentAddr = (props) => {
  const [currentLocation, setCurrentLocation] = useState()
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
    AMap.plugin(
      [
        'AMap.ToolBar',
        'AMap.Geolocation',
        'AMap.CitySearch',
        'AMap.HawkEye',
        'AMap.Geocoder',
      ],
      function () {
        // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        map.current.addControl(new AMap.ToolBar())
        // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
        // map.addControl(new AMap.HawkEye({ isOpen: true }))
        var geolocation = new AMap.Geolocation({
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
          needAddress: true, // 地址逆编码,失败不会报错，会一直等待，所以不用这个
          // noIpLocate: 0, //是否禁用IP精确定位，默认为0，0:都用 1:手机上不用 2:PC上不用 3:都不用
          noGeoLocation: 2, //是否禁用浏览器原生定位，默认为0，0:都用 1:手机上不用 2:PC上不用 3:都不用
          useNative: true, //是否与高德定位SDK能力结合，需要同时使用安卓版高德定位sdk，否则无效
          getCityWhenFail: true, //定位失败之后是否返回基本城市定位信息
        })

        map.current.addControl(geolocation)

        geolocation.getCurrentPosition(function (status, result) {
          if (status === 'complete') {
            onComplete(result)
          } else {
            alert('error! ' + JSON.stringify(result))
            console.log(result)
          }
        })

        //获取地址成功回调
        function onComplete(obj) {
          // data是具体的定位信息
          // console.log('success CurrentPosition!')
          // alert(JSON.stringify(obj))
          console.log(obj)
          // alert(obj.location_type)
          setLocationType(obj.location_type)
          setCurrentLocation(obj.formattedAddress)
        }
      }
    )
  }, [AMap, init, map])

  useEffect(() => {
    //进入页面时初始化一次
    init()
    relocate()
  }, [init, relocate])

  const [locationType, setLocationType] = useState('')

  return (
    <div className={style.wrap}>
      <div className={style.head}>
        <div>当前地址</div>
        <div>定位方式：{locationType}</div>
      </div>
      <div className={style.content}>
        <Link to="/">{currentLocation}</Link>
        <div className={style.reLocate} onClick={relocate}>
          <i className={style.icon}></i>
          重新定位
        </div>
      </div>
      <div id="map" className={style.map}></div>
    </div>
  )
}

export default CurrentAddr
