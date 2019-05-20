import React from 'react'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import store from './store'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Grommet full theme={grommet}>
          <Router>
            <Layout
              renderRoutes={() => (
                <React.Fragment>
                  <Route path="/" exact component={Home} />
                  <Route path="/favorites" component={Favorites} />
                </React.Fragment>
              )}
            />
          </Router>
        </Grommet>
      </Provider>
    </div>
  )
}

export default App
