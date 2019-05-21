import { Team, ITeam } from '../models/Team'

export const mockTeams: Team[] = [
  new Team({
    id: 1,
    city: 'A',
    name: 'B',
    full_name: 'Q',
    abbreviation: 'W',
    division: 'g',
    conference: 'w',
    isFavorite: true
  } as ITeam),
  new Team({
    id: 2,
    city: 'H',
    name: 'BH',
    full_name: 'HQ',
    abbreviation: 'HW',
    division: 'g',
    conference: 'w',
    isFavorite: false
  }) as ITeam
]
