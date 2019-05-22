import React from 'react'
import { shallow } from 'enzyme'
import { Favorites } from './Favorites'
import { mockTeams } from '../../store/fixtures/teams'

describe('<Favorites />', () => {
  it('renders list of teams', () => {
    shallow(<Favorites favorites={mockTeams} />)
  })
})
