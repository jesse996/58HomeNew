import { useState, memo } from 'react'
import { connect } from 'react-redux'
import CurrentAddr from './components/CurrentAddr'
import SearchBox from './components/SearchBox'
import style from './index.module.scss'
// import { actionCreators } from '../Home/store'
// import * as utils from '../../utils'

const Addr = (props) => {
  const { city } = props
  const [searching, setSearching] = useState(false)
  // const [city, setCity] = useState('')
  const changeSearching = (state) => {
    setSearching(state)
  }
  // useEffect(() => {
  //   if (!city || !address) {
  //     utils
  //       .getLocation()
  //       .then(({ city, address }) => {
  //         changeCity(city)
  //         changeAddress(address)
  //       })
  //       .catch((e) => {
  //         console.log(e)
  //       })
  //   }
  // }, [address, city, changeCity, changeAddress])

  return (
    <>
      <SearchBox
        searching={searching}
        changeSearching={changeSearching}
        city={city}
        // changeCity={changeCity}
      ></SearchBox>
      <div
        className={style.container}
        style={{ display: searching ? 'none' : '' }}
      >
        <CurrentAddr
        // city={city}
        // changeCity={changeCity}
        // address={address}
        // changeAddress={changeAddress}
        ></CurrentAddr>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  city: state.main.city,
  address: state.main.address,
})
// const mapDispatchTOProps = (dispath, ownProps) => ({
//   changeCity: (city) => dispath(actionCreators.changeCity(city)),
//   changeAddress: (data) => dispath(actionCreators.changeAddress(data)),
// })

export default connect(mapStateToProps)(memo(Addr))
