import style from './index.module.scss'

const HomeChoice = (props) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <span>到家精选</span>
      </div>
      <div className={style.wrap}>
        <div className={style.item}>
          <p className={style.main}>家电清洗</p>
          <p className={style.sub}>焕然一新</p>
          <img
            className={style.img}
            src="https://images.daojia.com/dop/custom/b4c78f9868b2e7f9e2428144eba0519a.png"
            width="50px"
            height="50px"
          ></img>
        </div>
        <div className={style.item}>
          <p className={style.main}>甲醛检测</p>
          <p className={style.sub}>守护健康</p>
          <img
            className={style.img}
            src="https://images.daojia.com/dop/custom/a717ad46351b2e424e33b3d2ca483cf4.png"
            width="50px"
            height="50px"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default HomeChoice
