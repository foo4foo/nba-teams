import React, { useState } from 'react'
import { Grid, Box } from 'grommet'
import { Route } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import Home from '../../pages/Home'
import Favorites from '../../pages/Favorites'

export const Layout: React.FunctionComponent = (
  props: any
): React.ReactElement => {
  const [sidebar, setSidebar] = useState(true)

  const toggleSidebar = (): void => {
    setSidebar(!sidebar)
  }

  return (
    <Grid
      fill
      rows={['auto', 'flex']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'sidebar', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] }
      ]}
    >
      <Header toggleSidebar={toggleSidebar} />
      {sidebar && <Sidebar />}
      <Box
        gridArea="main"
        pad={{
          horizontal: '20px',
          vertical: '15px'
        }}
      >
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Box>
    </Grid>
  )
}
