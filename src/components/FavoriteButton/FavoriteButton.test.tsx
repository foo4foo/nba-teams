import React from 'react'
import renderer from 'react-test-renderer'
import { FavoriteButton } from './'

describe('FavoriteButton', () => {
  it('renders successfuly', () => {
    const tree = renderer
      .create(<FavoriteButton isFavorite onClick={() => console.log('test')} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
