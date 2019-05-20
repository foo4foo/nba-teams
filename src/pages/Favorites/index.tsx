import { connect } from 'react-redux'
import { Favorites } from './Favorites'
import { favoriteTeams } from '../../store/selectors/teams'
import { IStore } from '../../store'

const mapStateToProps = (state: IStore) => ({
  favorites: favoriteTeams(state.teams)
})

export default connect(
  mapStateToProps,
  null
)(Favorites)
