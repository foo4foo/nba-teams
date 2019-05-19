import React from 'react'
import { Table, TableBody, TableRow, TableHeader, TableCell } from 'grommet'

interface IDataTableProps {
  data: any[]
  headers: string[]
  renderRow: (rowData: any) => React.ReactNode
}

export const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  const { data, headers, renderRow } = props

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableCell key={header} scope="col">
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{data.map((value) => renderRow(value))}</TableBody>
    </Table>
  )
}
