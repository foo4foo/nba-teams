import * as ActionTypes from './constants'
import { Team } from '../../models/Team'

export interface IFetchTeams {
  type: typeof ActionTypes.FETCH_TEAMS
}

export interface IFetchTeamsSuccess {
  type: typeof ActionTypes.FETCH_TEAMS_SUCCESS
  payload: Team[]
}

export interface IFetchTeamsFailure {
  type: typeof ActionTypes.FETCH_TEAMS_FAILURE
  error: string
}

export const fetchTeams = (): IFetchTeams => ({
  type: ActionTypes.FETCH_TEAMS
})

export const fetchTeamsSuccess = (teams: Team[]): IFetchTeamsSuccess => ({
  type: ActionTypes.FETCH_TEAMS_SUCCESS,
  payload: teams
})

export const fetchTeamsFailure = (error: string): IFetchTeamsFailure => ({
  type: ActionTypes.FETCH_TEAMS_FAILURE,
  error
})
