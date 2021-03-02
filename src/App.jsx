import './App.css'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import router from './router'
import store from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>{renderRoutes(router)}</HashRouter>
      </div>
    </Provider>
  )
}

export default App
