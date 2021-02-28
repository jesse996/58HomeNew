import { container } from './index.module.scss'

const Content= (props) => {
  return <div className={container}>{props.children}</div>
}

export default Content