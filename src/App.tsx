import React from 'react'
import { Grommet, Paragraph } from 'grommet'
import { dark } from 'grommet/themes'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from './components/Layout'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Grommet full theme={dark}>
          <Router>
            <Layout>
              <Paragraph>
                Edit <code>src/App.tsx</code> and save to reload.
              </Paragraph>
            </Layout>
          </Router>
        </Grommet>
      </Provider>
    </div>
  )
}

export default App
