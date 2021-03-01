import CurrentAddr from './components/CurrentAddr'
import style from './index.module.scss'

const Addr = (props) => {
  return (
    <div className={style.container}>
      <CurrentAddr></CurrentAddr>
    </div>
  )
}

export default Addr
