import React from 'react'
import { Box, Button, Text } from 'grommet'
import { NavLink } from 'react-router-dom'

export const Sidebar = (props: any) => {
  return (
    <Box
      gridArea="sidebar"
      background="dark-3"
      width="small"
      animation={[
        { type: 'fadeIn', duration: 300 },
        { type: 'slideRight', size: 'xlarge', duration: 150 }
      ]}
    >
      <NavLink to="/">
        <Button>
          <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Text color="#FFF">Home</Text>
          </Box>
        </Button>
      </NavLink>
      <NavLink to="/favorites">
        <Button>
          <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Text color="#FFF">Favorites</Text>
          </Box>
        </Button>
      </NavLink>
    </Box>
  )
}
