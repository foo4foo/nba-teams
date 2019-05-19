export interface ITeam {
  readonly id: number
  readonly abbreviation: string
  readonly city: string
  readonly conference: string
  readonly division: string
  readonly full_name: string
  readonly name: string
  isFavorite: boolean
}

export class Team {
  readonly id: number
  readonly abbreviation: string
  readonly city: string
  readonly conference: string
  readonly division: string
  readonly full_name: string
  readonly name: string

  isFavorite: boolean = false

  constructor(team: ITeam) {
    this.id = team.id
    this.abbreviation = team.abbreviation
    this.city = team.city
    this.conference = team.conference
    this.division = team.division
    this.full_name = team.full_name
    this.name = team.name
  }

  public static getAttributes = () => {
    return [
      'Favorite',
      'Full Name',
      'Name',
      'City',
      'Conference',
      'Division',
      'Abbreviation'
    ]
  }
}
