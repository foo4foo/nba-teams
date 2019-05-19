import { createReducer } from '../../lib/utils'
//import ActionTypes, { IAppStartFailure } from '../actions/app/types'

interface TeamsState {
  loading: boolean
  error: string
}

const initialState: TeamsState = {
  loading: false,
  error: ''
}

const teamsReducer = createReducer(initialState, {
  // [ActionTypes.APP_START](state: IState) {
  //   return { ...state, loading: true }
  // },
  // [ActionTypes.APP_START_SUCCESS](state: IState) {
  //   return { ...state, loading: false, error: '' }
  // },
  // [ActionTypes.APP_START_FAILURE](state: IState, action: IAppStartFailure) {
  //   return { ...state, loading: false, error: action.error }
  // }
})

export default teamsReducer
