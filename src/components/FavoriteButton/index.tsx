import React from 'react'
import { Favorite } from 'grommet-icons'

interface IFavoriteProps {
  isFavorite: boolean
  onClick: () => void
}

const FavoriteButton: React.FunctionComponent<IFavoriteProps> = ({
  isFavorite,
  onClick
}) => {
  return (
    <Favorite
      color={isFavorite ? '#F8F8F8' : '#333333'}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    />
  )
}

export { FavoriteButton }
