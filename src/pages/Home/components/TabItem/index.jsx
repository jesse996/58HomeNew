import { memo } from 'react'
const TabItem = ({ name, img }) => {
  return (
    <div>
      <img src={img} width={25} height={25} alt=""></img>
      <span>{name}</span>
    </div>
  )
}
export default memo(TabItem)
