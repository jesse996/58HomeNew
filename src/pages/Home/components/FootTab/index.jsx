import React, { memo, useState } from 'react'
import { container, wrap, item, img } from './index.module.scss'
import { withRouter } from 'react-router-dom'

const FootTab = (props) => {
  const { history } = props
  const [activate, setActivate] = useState(0)
  const changeTab = (index) => {
    if (index === activate) return
    setActivate(index)
    let newPath = ''
    switch (index) {
      case 0:
        newPath = '/home'
        break
      case 1:
        newPath = '/home/services'
        break
      case 2:
        newPath = '/home/message'
        break
      case 3:
        newPath = '/home/my'
        break
      default:
        break
    }
    history.push(newPath)
  }
  return (
    <div className={container}>
      <div className={wrap}>
        <div className={item} onClick={() => changeTab(0)}>
          <i
            className={img}
            style={{
              backgroundPosition: activate === 0 ? '0 100%' : '0 0',
            }}
          ></i>
          <span>首页</span>
        </div>
        <div className={item} onClick={() => changeTab(1)}>
          <i
            className={img}
            style={{
              backgroundPosition: activate === 1 ? '-50px 100%' : '-50px 0',
            }}
          ></i>
          <span>发服务</span>
        </div>
        <div className={item} onClick={() => changeTab(2)}>
          <i
            className={img}
            style={{
              backgroundPosition: activate === 2 ? '-75px 100%' : '-75px 0',
            }}
          ></i>
          <span>消息</span>
        </div>
        <div className={item} onClick={() => changeTab(3)}>
          <i
            className={img}
            style={{
              backgroundPosition: activate === 3 ? '-100px 100%' : '-100px 0',
            }}
          ></i>
          <span>我的</span>
        </div>
      </div>
    </div>
  )
}
// FootTab.prototype = {
//   data: PropTypes.array.isRequired,
// }
export default withRouter(memo(FootTab))
// export default FootTab
