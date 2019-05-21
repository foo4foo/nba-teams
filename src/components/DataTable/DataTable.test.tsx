import React from 'react'
import renderer from 'react-test-renderer'
import { TableRow, TableCell } from 'grommet'
import { DataTable } from './'

describe('DataTable', () => {
  it('renders successfuly', () => {
    const tree = renderer
      .create(
        <DataTable
          headers={['1', '2', '3']}
          data={[1, 2, 3]}
          renderRow={(val) => (
            <TableRow key={val}>
              <TableCell>{val}</TableCell>
              <TableCell>{val}</TableCell>
              <TableCell>{val}</TableCell>
            </TableRow>
          )}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
