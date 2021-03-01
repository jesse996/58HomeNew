import { useEffect, useRef, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.scss'

const CurrentAddr = (props) => {
  const [currentLocation, setCurrentLocation] = useState()
  let map
  let AMap
  const init = () => {
    AMap = window.AMap
    map = new AMap.Map('map', {
      zoom: 11, //级别
      // center: [116.397428, 39.90923], //中心点坐标
      viewMode: '3D', //使用3D视图
    })
  }
  useEffect(() => {
    relocate()
  }, [])
  const relocate = () => {
    if (!map) {
      init()
    }
    console.log(map)
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
        map.addControl(new AMap.ToolBar())
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
        })

        map.addControl(geolocation)

        geolocation.getCurrentPosition(function (status, result) {
          if (status === 'complete') {
            onComplete(result)
          } else {
            onError(result)
          }
        })

        function onComplete(obj) {
          // data是具体的定位信息
          console.log('success!')
          console.log(obj)

          //geocoder
          let geocoder = new AMap.Geocoder({
            radius: 1000, //以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息
            extensions: 'base', //返回地址描述以及附近兴趣点和道路信息，默认“base”
          })
          //返回地理编码结果
          geocoder.on('complete', (data) => {
            console.log('地理编码结果')
            console.log(data)
            if (data.info) {
              setCurrentLocation(data.regeocode.formattedAddress)
            }
          })
          var gps = [obj.position.lng, obj.position.lat]
          geocoder.getAddress(new AMap.LngLat(gps[0], gps[1]))
          // AMap.convertFrom(gps, 'gps', function (status, result) {
          //   console.log('convert:' + status)
          //   console.log(result)
          //   if (result.info === 'ok') {
          //     var lnglats = result.locations // Array.<LngLat>
          //     //逆地理编码
          //     // geocoder.getAddress(lnglats)
          //     // geocoder.getAddress(new AMap.LngLat(116.359119, 39.972121))
          //   }
          // })
        }

        function onError(data) {
          // 定位出错
          // console.log('error!')
          // console.log(data)
        }

        // 城市
        // var citySearch = new AMap.CitySearch()
        // citySearch.getLocalCity(function (status, result) {
        //   if (status === 'complete' && result.info === 'OK') {
        //     // 查询成功，result即为当前所在城市信息
        //     console.log(result)
        //     // setCurrentLocation(result.province + ' ' + result.city)
        //   }
        // })
      }
    )
  }

  return (
    <div className={style.wrap}>
      <div className={style.head}>当前地址</div>
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
