import { useState, memo } from 'react'
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
        {
          name: '苏州天鹅到家',
          link: '/',
        },
        {
          name: '天津天鹅到家',
          link: '/',
        },
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
        {
          name: '苏州天鹅到家',
          link: '/',
        },
        {
          name: '天津天鹅到家',
          link: '/',
        },
      ],
    },
    {
      title: '周边城市',
      data: [
        {
          name: '廊坊天鹅到家',
          link: '/',
        },
        {
          name: '天津天鹅到家',
          link: '/',
        },
        {
          name: '保定天鹅到家',
          link: '/',
        },
        {
          name: '张家口天鹅到家',
          link: '/',
        },
        {
          name: '承德天鹅到家',
          link: '/',
        },
        {
          name: '唐山天鹅到家',
          link: '/',
        },
        {
          name: '廊坊天鹅到家',
          link: '/',
        },
        {
          name: '天津天鹅到家',
          link: '/',
        },
        {
          name: '保定天鹅到家',
          link: '/',
        },
        {
          name: '张家口天鹅到家',
          link: '/',
        },
        {
          name: '承德天鹅到家',
          link: '/',
        },
        {
          name: '唐山天鹅到家',
          link: '/',
        },
      ],
    },
    {
      title: '知识内容',
      data: [
        {
          name: '咨询',
          link: '/',
        },
        {
          name: '问答',
          link: '/',
        },
        {
          name: '百科',
          link: '/',
        },
        {
          name: '聚合',
          link: '/',
        },
        {
          name: '食谱',
          link: '/',
        },
        {
          name: '工具',
          link: '/',
        },
        {
          name: '咨询',
          link: '/',
        },
        {
          name: '问答',
          link: '/',
        },
        {
          name: '百科',
          link: '/',
        },
        {
          name: '聚合',
          link: '/',
        },
        {
          name: '食谱',
          link: '/',
        },
        {
          name: '工具',
          link: '/',
        },
      ],
    },
  ]
  const [currentTab, setCurrentTab] = useState('热门服务')
  const changeCurrentTab = (newTab) => {
    setCurrentTab(newTab)
  }
  const getCurrentItems = (title) => {
    const res = data.find((x) => x.title === title).data
    let ans = showMore ? res : res.slice(0, 6)
    return ans
  }
  const [showMore, setShowMore] = useState(false)
  const triggerShowMore = () => {
    setShowMore((e) => !e)
  }

  return (
    <div className={style.container}>
      <div className={style.nav}>
        {data.map((item, index) => (
          <div
            onClick={() => changeCurrentTab(item.title)}
            className={`${style.tab} ${
              currentTab === item.title ? style.activate : ''
            }`}
            key={index}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className={style.wrap}>
        {getCurrentItems(currentTab).map((item, index) => (
          <div className={style.item} key={index}>
            {item.name}
          </div>
        ))}
      </div>
      <div className={style.showMore} onClick={triggerShowMore}>
        {showMore ? '收起' : '查看'}更多&gt;
      </div>
    </div>
  )
}

export default memo(Footer)
