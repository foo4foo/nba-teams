import React, { useEffect } from 'react'
import { Box, Paragraph, TableRow, TableCell, Text } from 'grommet'
import { DataTable } from '../../components/DataTable'
import { FavoriteButton } from '../../components/FavoriteButton'
import { Team, ITeam } from '../../store/models/Team'

interface IHomeProps {
  teams: Team[]
  loading: boolean
  error: string
  fetchTeams: () => void
  setFavorite: (team: ITeam) => void
}

export const Home: React.FunctionComponent<IHomeProps> = (
  props
): React.ReactElement => {
  const { teams, loading, fetchTeams, setFavorite } = props

  useEffect(() => {
    if (!teams.length) {
      fetchTeams()
    }
  }, [])

  const renderTeamRow = (team: ITeam): React.ReactNode => (
    <TableRow key={team.name}>
      <TableCell>
        <FavoriteButton
          isFavorite={team.isFavorite}
          onClick={() => setFavorite(team)}
        />
      </TableCell>
      <TableCell>
        <Text>{team.full_name}</Text>
      </TableCell>
      <TableCell>
        <Text>{team.name}</Text>
      </TableCell>
      <TableCell>
        <Text>{team.city}</Text>
      </TableCell>
      <TableCell>
        <Text>{team.conference}</Text>
      </TableCell>
      <TableCell>
        <Text>{team.division}</Text>
      </TableCell>
      <TableCell>
        <Text>{team.abbreviation}</Text>
      </TableCell>
    </TableRow>
  )

  return (
    <Box>
      {loading && <Paragraph>Loading ...</Paragraph>}
      <DataTable
        headers={Team.getAttributes()}
        data={teams}
        renderRow={renderTeamRow}
      />
    </Box>
  )
}
