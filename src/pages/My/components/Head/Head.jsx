import { loginBlock, wrap, bgImg, box } from './index.module.scss'

const Head = () => {
  return (
    <div className={loginBlock}>
      <img
        src="//static.daojia.com/assets/project/user-center-v1.1/images/banner-bg.png"
        alt="bg"
        className={bgImg}
      ></img>
      <div className={wrap}>
        <div className={box}>
          <img
            src="//static.daojia.com/assets/project/user-center-v1.1/images/temp-head_c43dfad.png"
            alt="avatar"
          ></img>
          <span>立即登录</span>
        </div>
      </div>
    </div>
  )
}

export default Head
