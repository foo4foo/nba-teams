import reducer, { initialState } from './teams'
import {
  fetchTeams,
  fetchTeamsFailure,
  fetchTeamsSuccess
} from '../actions/teams'
import { mockTeams } from '../fixtures/teams'

describe('teams reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_TEAMS', () => {
    expect(reducer(initialState, fetchTeams())).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('should handle FETCH_TEAMS_SUCCESS', () => {
    expect(reducer(initialState, fetchTeamsSuccess(mockTeams))).toEqual({
      ...initialState,
      data: mockTeams
    })
  })

  it('should handle FETCH_TEAMS_FAILURE', () => {
    expect(reducer(initialState, fetchTeamsFailure('Test Error'))).toEqual({
      ...initialState,
      error: 'Test Error'
    })
  })
})
