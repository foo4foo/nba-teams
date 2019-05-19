import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { Home } from './Home'
import { fetchTeams } from '../../store/actions/teams'

const mapStateToProps = (state: any) => ({
  loading: state.teams.loading,
  error: state.teams.error,
  teams: state.teams.data
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchTeams }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
