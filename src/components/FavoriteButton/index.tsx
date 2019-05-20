import React from 'react'
import { Favorite } from 'grommet-icons'

interface IFavoriteProps {
  isFavorite: boolean
  onClick: () => void
}

const FavoriteButton: React.FunctionComponent<IFavoriteProps> = ({
  isFavorite,
  onClick
}): React.ReactElement => {
  return (
    <Favorite
      color={isFavorite ? 'status-critical' : 'dark-1'}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    />
  )
}

export { FavoriteButton }
