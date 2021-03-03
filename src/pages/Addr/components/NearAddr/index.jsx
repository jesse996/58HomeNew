import { memo } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { actionCreators } from '../../../Home/store'
import style from './index.module.scss'

const NearAddr = (props) => {
  //pois是附近地址
  const { pois, changeAddress } = props
  const history = useHistory()
  const handleClick = (data) => {
    changeAddress(data)
    history.push('/')
  }
  return (
    <div className={style.container}>
      <div className={style.title}>附近地址</div>
      <div className={style.wrap}>
        {pois.slice(0, 8).map((item, index) => (
          <div
            className={style.item}
            onClick={() => handleClick(item.name)}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pois: state.main.pois,
})

const mapDispatchToProps = (dispatch) => ({
  changeAddress: (data) => dispatch(actionCreators.changeAddress(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(NearAddr))
