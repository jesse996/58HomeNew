import { memo } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.scss'

const HomeDoor = (props) => {
  const data = [
    {
      img:
        '//static.daojia.com/changsha/fe-website-dj-m/static/images/home/door_1.png',
      name: '电脑维修',
      link: '',
    },
    {
      img:
        '//static.daojia.com/changsha/fe-website-dj-m/static/images/home/door_2.png',
      name: '手机维修',
      link: '',
    },
    {
      img:
        '//static.daojia.com/changsha/fe-website-dj-m/static/images/home/door_3.png',
      name: '管道疏通',
      link: '',
    },
    {
      img:
        '//static.daojia.com/changsha/fe-website-dj-m/static/images/home/door_5.png',
      name: '灯具维修',
      link: '',
    },
  ]
  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.left}>立即上门</div>
        <div className={style.right}>商家急速接单</div>
      </div>
      <div className={style.wrap}>
        {data.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className={style.item}>
              <img src={item.img} width="40px" height="40px" alt=""></img>
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default memo(HomeDoor)
