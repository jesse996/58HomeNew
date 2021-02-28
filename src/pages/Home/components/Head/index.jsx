import React from 'react'
import { Link } from 'react-router-dom'
import { head, wrap, addr, overflowEllipsis, search } from './index.module.scss'

const Head = (props) => {
  return (
    <div className={head}>
      <img
        src="https://static.daojia.com/changsha/fe-website-dj-m/static/widget/topbar/img/dj-logo-new_984624d.png"
        alt=""
        width="62px"
        height="18px"
      ></img>
      <div className={wrap}>
        <Link to="/">
          <div className={`${addr} ${overflowEllipsis}`}>中国银行紫阳湖</div>
          <span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icondown"></use>
            </svg>
          </span>
        </Link>
        <div className={search}>
          <i></i>
          <span>搜索</span>
        </div>
      </div>
    </div>
  )
}
export default Head
