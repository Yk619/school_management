import React from 'react';

const TableRow = ({ row }) => (
  <tr>
    <td>{row.id}</td>
    <td>{row.name}</td>
    <td>{row.age}</td>
    <td>{row.grade}</td>
    <td></td>
  </tr>
);

export default TableRow;
