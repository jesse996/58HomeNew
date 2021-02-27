import './App.css'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import router from './router'

function App() {
  return (
    <div className="App">
      <HashRouter>{renderRoutes(router)}</HashRouter>
    </div>
  )
}

export default App
