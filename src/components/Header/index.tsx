import React from 'react'
import { Box, Button, Text } from 'grommet'

export const Header = (props: any): React.ReactElement => {
  return (
    <Box
      gridArea="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      background="dark-2"
    >
      <Button onClick={props.toggleSidebar}>
        <Text size="large">NBA</Text>
      </Button>
    </Box>
  )
}
