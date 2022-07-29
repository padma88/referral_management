import { useTable } from "react-table";
import { useContext, useMemo } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext";

const TableStyle = styled.table.attrs(props => props)`
border: 1px solid;
font-size: 0.9em;
width: 100%;
padding: 100px;
min-width: 300px;
th,
td {
  padding: 0.2em 0.5em;
}
th {
  background: ${props => props.secondary};
  color: #fff;
}
tr:nth-child(odd) {
  background: #d8d8d840;
  backdrop-filter: 0.3
}
`;

function Table({ DATA, COLUMNS }) {
  const colors = useContext(ThemeContext);
  
  const data = useMemo(() => DATA, [DATA]);
  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // apply the table props
    <TableStyle {...colors} {...getTableProps}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/** Apply the table body props */}
      <tbody {...getTableBodyProps}>
        {
          // Lopp over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Lopp over the row cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </TableStyle>
  );
}

export default Table;
