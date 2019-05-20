import React, { useState } from 'react'
import { Grid, Box } from 'grommet'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'

interface ILayout {
  renderRoutes: () => React.ReactNode
}

export const Layout: React.FunctionComponent<ILayout> = ({
  renderRoutes
}): React.ReactElement => {
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
        overflow="auto"
        pad={{
          horizontal: '20px',
          vertical: '15px'
        }}
      >
        {renderRoutes()}
      </Box>
    </Grid>
  )
}
