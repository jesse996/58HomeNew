import { container } from './index.module.scss'
import Nav from './components/Nav/index'

const Content = (props) => {
  return (
    <div className={container}>
      <Nav></Nav>
      {props.children}
    </div>
  )
}

export default Content
