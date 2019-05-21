import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Sidebar } from './'

describe('DataTable', () => {
  it('renders successfuly', () => {
    const tree = renderer
      .create(
        <Router>
          <Sidebar />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
