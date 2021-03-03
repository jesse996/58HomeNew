import { memo } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.scss'
const Nav = (props) => {
  const data = [
    {
      img:
        'https://images.daojia.com/dop/custom/f3e9130d1750ebab91caa9b86dbbd84e.png',
      name: '保洁',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/64b0a24bebec5e986b7523d24f38c9e8.png',
      name: '保姆月嫂',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/9b04c448bf5a2e53407227abb39b27dc.png',
      name: '搬家',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/c16a42b496dad271fc602eae789ce1bf.png',
      name: '拉货快运',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/01a443c96c08e02cd32ddd9958f82292.png',
      name: '房屋维修',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/d8bee5c0c7c859fe16ec4048bafe4472.png',
      name: '家电维修',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/7e215d9f785a9dc282b3f4ec32b235d1.png',
      name: '数码维修',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/aea096d1e67cf4060b1a503e2cfa71f6.png',
      name: '按摩护理',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/9546de0c00f6e3d3d929c67752c05765.jpg',
      name: '家庭清洁',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/b74c0dfc11bfb223a280f2b75751cb92.jpg',
      name: '上门安装',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/93e709d1d056b6ef96f31b5dccbb3172.jpg',
      name: '优享生活',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/493b81c960bd4f7f0c5f49c7de674ed9.png',
      name: '鲜花',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/07e56f5f36df61ed96744d53a5494797.jpg',
      name: '到家达人',
      link: '/clean',
    },
    {
      img:
        'https://images.daojia.com/dop/custom/4eda295483757df15902a1021e836cff.png',
      name: '全部分类',
      link: '/clean',
    },
  ]
  return (
    <div className={style.wrap}>
      {data.map((item, index) => (
        <div className={style.item} key={index}>
          <Link to={item.link}>
            <img
              src={item.img}
              className={style.img}
              width="45px"
              height="45px"
              alt=""
            ></img>
            <span className={style.name}>{item.name} </span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default memo(Nav)
