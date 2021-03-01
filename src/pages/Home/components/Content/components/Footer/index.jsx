import { useState } from 'react'
import style from './index.module.scss'

const Footer = (props) => {
  const data = [
    {
      title: '热门服务',
      data: [
        {
          name: '北京保洁',
          link: '/',
        },
        {
          name: '北京保姆',
          link: '/',
        },
        {
          name: '北京搬家货运',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
        {
          name: '北京家电数码',
          link: '/',
        },
      ],
    },
    {
      title: '热门城市',
      data: [
        {
          name: '北京天鹅到家',
          link: '/',
        },
        {
          name: '上海天鹅到家',
          link: '/',
        },
        {
          name: '广州天鹅到家',
          link: '/',
        },
        {
          name: '深圳天鹅到家',
          link: '/',
        },
      ],
    },
    {
      title: '周边城市',
      data: [
        {
          name: '北京天鹅到家',
          link: '/',
        },
        {
          name: '上海天鹅到家',
          link: '/',
        },
        {
          name: '广州天鹅到家',
          link: '/',
        },
        {
          name: '深圳天鹅到家',
          link: '/',
        },
      ],
    },
    {
      title: '知识内容',
      data: [
        {
          name: '北京天鹅到家',
          link: '/',
        },
        {
          name: '上海天鹅到家',
          link: '/',
        },
        {
          name: '广州天鹅到家',
          link: '/',
        },
        {
          name: '深圳天鹅到家',
          link: '/',
        },
      ],
    },
  ]
  let currentTab = '热门服务'
  const getCurrentItems = (title) => {
    const res = data.find((x) => x.title === title).data
    return showMore ? res : res.slice(0, 6)
  }
  const [showMore, setShowMore] = useState(false)
  const triggerShowMore = () => {
    setShowMore((e) => !e)
  }

  return (
    <div className={style.container}>
      <div className={style.nav}>
        {data.map((item, index) => (
          <div className={style.tab} key={index}>
            {item.title}
          </div>
        ))}
      </div>
      <div className={style.wrap}>
        {getCurrentItems(currentTab).map((item, index) => (
          <div className={style.item}>{item.name}</div>
        ))}
      </div>
      <div className={style.showMore} onClick={triggerShowMore}>
        {showMore ? '查看' : '收起'}更多&gt;
      </div>
    </div>
  )
}

export default Footer
