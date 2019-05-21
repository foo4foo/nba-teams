import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Layout } from './'

describe('DataTable', () => {
  it('renders successfuly', () => {
    const tree = renderer
      .create(
        <Router>
          <Layout renderRoutes={() => <React.Fragment />} />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
