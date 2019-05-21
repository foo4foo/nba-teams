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
import { Team } from '../../store/models/Team'

interface IFavoritesProps {
  favorites: Team[]
}

export const Favorites: React.FunctionComponent<IFavoritesProps> = ({
  favorites
}): React.ReactElement => {
  const [filter, setFilter] = useState('')

  const filteredFavorites = favorites.filter(
    (team) =>
      team.name.toLowerCase().includes(filter) ||
      team.city.toLowerCase().includes(filter)
  )

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

  return (
    <Box fill align="start" justify="start" pad="large">
      <FormField validate={{ regexp: /^[a-z]/i }} required>
        <TextInput
          id="text-input"
          placeholder="Name"
          value={filter}
          onChange={({ target: { value } }) => setFilter(value)}
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
