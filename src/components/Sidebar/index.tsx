import React from 'react'
import { Box, Button, Text } from 'grommet'
import { NavLink } from 'react-router-dom'

interface ISidebar {}

export const Sidebar: React.FunctionComponent<ISidebar> = (
  props
): React.ReactElement => {
  return (
    <Box
      gridArea="sidebar"
      background="light-1"
      width="small"
      animation={[
        { type: 'fadeIn', duration: 300 },
        { type: 'slideRight', size: 'xlarge', duration: 150 }
      ]}
    >
      <NavLink to="/">
        <Button>
          <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Text color="dark-1">Home</Text>
          </Box>
        </Button>
      </NavLink>
      <NavLink to="/favorites">
        <Button>
          <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Text color="dark-1">Favorites</Text>
          </Box>
        </Button>
      </NavLink>
    </Box>
  )
}
