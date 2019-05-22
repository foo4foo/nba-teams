import React, { useState } from 'react'
import {
  Box,
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  Text,
  FormField,
  TextInput
} from 'grommet'
import debounce from 'lodash/debounce'
import { Team } from '../../store/models/Team'

interface IFavoritesProps {
  favorites: Team[]
}

export const Favorites: React.FunctionComponent<IFavoritesProps> = ({
  favorites
}): React.ReactElement => {
  const [filter, setFilter] = useState('')
  const [filteredFavorites, setFilteredFavorites] = useState([...favorites])

  const filterTeams = (): ((pattern: string) => void) => {
    return debounce((pattern: string) => {
      setFilteredFavorites(
        favorites.filter(
          (team) =>
            team.name.toLowerCase().includes(pattern) ||
            team.city.toLowerCase().includes(pattern)
        )
      )
    }, 500)
  }

  const renderTeam = (team: Team): React.ReactNode => (
    <TableRow key={team.name}>
      <TableCell>
        <Text>{team.name}</Text>
      </TableCell>
      <TableCell>
        <Text>{team.city}</Text>
      </TableCell>
    </TableRow>
  )

  const onTextChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(value)
    filterTeams()(value)
  }

  return (
    <Box fill align="start" justify="start" pad="large">
      <FormField validate={{ regexp: /^[a-z]/i }} required>
        <TextInput
          id="text-input"
          placeholder="Name"
          value={filter}
          onChange={onTextChange}
        />
      </FormField>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>{filteredFavorites.map(renderTeam)}</TableBody>
      </Table>
    </Box>
  )
}
