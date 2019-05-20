import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { Home } from './Home'
import { fetchTeams, setFavorite } from '../../store/actions/teams'

const mapStateToProps = (state: any) => ({
  loading: state.teams.loading,
  error: state.teams.error,
  teams: state.teams.data
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchTeams, setFavorite }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
