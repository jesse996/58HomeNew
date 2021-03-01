import { Link } from 'react-router-dom'
import style from './index.module.scss'

const More = (props) => {
  return (
    <>
      <div className={style.wrap}>
        <span>你需要吗？</span>
        <Link to="/directory">更多服务</Link>
      </div>
      <div className={style.more}>查看更多</div>
    </>
  )
}

export default More
