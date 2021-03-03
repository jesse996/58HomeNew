import { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { head, wrap, addr, overflowEllipsis, search } from './index.module.scss'
import * as utils from '../../../../utils'
import { actionCreators } from '../../store'

const Head = (props) => {
  const { address, changeAddress, changeCity, changePois } = props
  useEffect(() => {
    if (address) return
    utils
      .getLocation()
      .then(({ formattedAddress, addressComponent, pois }) => {
        // console.log(pois)
        changeAddress(formattedAddress)
        changeCity(addressComponent.city)
        changePois(pois)
      })
      .catch((error) => {
        alert(error)
      })
  }, [changeCity, address, changeAddress, changePois])

  return (
    <div className={head}>
      <img
        src="https://static.daojia.com/changsha/fe-website-dj-m/static/widget/topbar/img/dj-logo-new_984624d.png"
        alt=""
        width="62px"
        height="18px"
      ></img>
      <div className={wrap}>
        <Link to="/addr">
          <div className={`${addr} ${overflowEllipsis}`}>{address}</div>

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

const mapStateToProps = (state) => ({
  address: state.main.address,
})

const mapDispatchToProps = (dispatch) => ({
  changeAddress: (addr) => dispatch(actionCreators.changeAddress(addr)),
  changeCity: (city) => dispatch(actionCreators.changeCity(city)),
  changePois: (data) => dispatch(actionCreators.changePois(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Head))
