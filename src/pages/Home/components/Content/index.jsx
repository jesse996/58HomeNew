import { memo } from 'react'
import { container } from './index.module.scss'
import Nav from './components/Nav/index'
import HomeChoice from './components/HomeChoice/index'
import HomeDoor from './components/HomeDoor/index'
import More from './components/More/index'
import Footer from './components/Footer/index'

const Content = (props) => {
  return (
    <div className={container}>
      <Nav></Nav>
      <HomeChoice></HomeChoice>
      <HomeDoor></HomeDoor>
      <More></More>
      <Footer></Footer>
      {/* {props.children} */}
    </div>
  )
}

export default memo(Content)
