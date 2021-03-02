import { useState } from 'react'
import style from './index.module.scss'

const SearchBox = (props) => {
  const { searching, changeSearching, city } = props
  const [searchValue, setSearchValue] = useState('')
  const changeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  const clickSearch = () => {
    changeSearching(true)
  }

  const cancleSearch = () => {
    changeSearching(false)
    setSearchValue('')
  }

  return (
    <div className={style.container}>
      <div className={`${style.wrap} ${searching ? style.wrapSmall : ''}`}>
        <span className={style.city}>{city}</span>
        <input
          className={style.input}
          placeholder={`搜索${city}的服务地址`}
          onClick={clickSearch}
          value={searchValue}
          onChange={changeSearchValue}
        ></input>
        <div
          className={style.cancle}
          style={{ display: searching ? '' : 'none' }}
          onClick={cancleSearch}
        >
          取消
        </div>
      </div>
    </div>
  )
}

export default SearchBox
