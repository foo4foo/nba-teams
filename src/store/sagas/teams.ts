import { call, put, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from '../actions/teams/constants'
import * as actions from '../actions/teams'
import { IFetchTeams } from '../actions/teams'
import * as api from '../data/teams'
import { ITeam, Team } from '../models/Team'

export function* fetchTeams(action: IFetchTeams) {
  try {
    const response = yield call(api.fetchTeams)

    const transformedData: Team[] = (response.data as []).map((team: ITeam) => {
      return new Team(team)
    })

    yield put(actions.fetchTeamsSuccess(transformedData))
  } catch (error) {
    yield put(actions.fetchTeamsFailure(error.message))
  }
}

export default function*() {
  yield takeLatest(ActionTypes.FETCH_TEAMS, fetchTeams)
}
