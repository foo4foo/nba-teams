import { createSelector } from 'reselect'
import { ITeamsState } from '../reducers/teams'
import { Team } from '../models/Team'

export const favoriteTeams = createSelector(
  (state: ITeamsState) => state.data,
  (teams: Team[]) => teams.filter((team: Team) => team.isFavorite)
)
