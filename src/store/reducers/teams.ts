import { createReducer } from '../../lib/utils'
import * as ActionTypes from '../actions/teams/constants'
import {
  IFetchTeamsSuccess,
  IFetchTeamsFailure,
  ISetFavorite
} from '../actions/teams'
import { Team } from '../models/Team'

export interface ITeamsState {
  loading: boolean
  error: string
  data: Team[]
}

const initialState: ITeamsState = {
  loading: false,
  error: '',
  data: []
}

const teamsReducer = createReducer(initialState, {
  [ActionTypes.SET_FAVORITE](state: ITeamsState, action: ISetFavorite) {
    return {
      ...state,
      data: state.data.map((team: Team) => {
        if (team.id === action.payload.id) {
          team.isFavorite = !team.isFavorite
        }

        return team
      })
    }
  },
  [ActionTypes.FETCH_TEAMS](state: ITeamsState) {
    return { ...state, loading: true }
  },
  [ActionTypes.FETCH_TEAMS_SUCCESS](
    state: ITeamsState,
    action: IFetchTeamsSuccess
  ) {
    return { ...state, data: action.payload, loading: false, error: '' }
  },
  [ActionTypes.FETCH_TEAMS_FAILURE](
    state: ITeamsState,
    action: IFetchTeamsFailure
  ) {
    return { ...state, loading: false, error: action.error }
  }
})

export default teamsReducer
