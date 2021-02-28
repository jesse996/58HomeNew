import { container } from './index.module.scss'
import Nav from './components/Nav/index'
import HomeChoice from './components/HomeChoice/index'

const Content = (props) => {
  return (
    <div className={container}>
      <Nav></Nav>
      <HomeChoice></HomeChoice>
      {props.children}
    </div>
  )
}

export default Content
