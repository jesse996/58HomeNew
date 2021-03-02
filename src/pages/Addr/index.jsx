import { useState } from 'react'
import CurrentAddr from './components/CurrentAddr'
import SearchBox from './components/SearchBox'
import style from './index.module.scss'

const Addr = (props) => {
  const [searching, setSearching] = useState(false)
  const [city, setCity] = useState('')
  const changeSearching = (state) => {
    setSearching(state)
  }

  return (
    <>
      <SearchBox
        searching={searching}
        changeSearching={changeSearching}
        city={city}
      ></SearchBox>
      <div
        className={style.container}
        style={{ display: searching ? 'none' : '' }}
      >
        <CurrentAddr city={city} setCity={setCity}></CurrentAddr>
      </div>
    </>
  )
}

export default Addr
