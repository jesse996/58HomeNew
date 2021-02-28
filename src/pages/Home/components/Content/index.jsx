import { container } from './index.module.scss'
import Nav from './components/Nav/index'
import HomeChoice from './components/HomeChoice/index'
import HomeDoor from './components/HomeDoor/index'

const Content = (props) => {
  return (
    <div className={container}>
      <Nav></Nav>
      <HomeChoice></HomeChoice>
      <HomeDoor></HomeDoor>
      {props.children}
    </div>
  )
}

export default Content
