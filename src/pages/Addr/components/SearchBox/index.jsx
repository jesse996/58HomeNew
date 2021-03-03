import { useState, memo, useEffect, useMemo } from 'react'
import style from './index.module.scss'
import { getSuggestionAddr } from '../../../../api/index'
import { debounce } from '../../../../utils/index'

const SearchBox = (props) => {
  const { searching, changeSearching, city } = props
  const [searchValue, setSearchValue] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [pois, setPois] = useState([])

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const getPoisDebounce = useMemo(() => {
    const getPois = async ({ keyword, city }) => {
      setIsFetching(true)
      let { data } = await getSuggestionAddr({
        keyword,
        city,
      })
      setIsFetching(false)
      console.log(data)
      if (data.code === 0) setPois(data.data)
    }
    return debounce(getPois, 500, false)
  }, [])

  useEffect(() => {
    getPoisDebounce({
      keyword: searchValue,
      city,
    })
  }, [city, getPoisDebounce, searchValue])

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
      {isFetching ? (
        <div>loading...</div>
      ) : (
        <div className={style.content}>
          {pois.map((item, index) => (
            <div key={index} className={style.item}>
              <div className={style.name}>{item.poiName}</div>
              <div className={style.area}>{item.district}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default memo(SearchBox)
