import React from 'react';

const Columns = ({ name, redirect }) => (
  <li className="nav-item mb-3" style={{ fontWeight: 'bold' }}>
    <Link className="nav-link" to={redirect}>
        {name}
    </Link>
  </li>
);
const TableHeader = () => (
  <thead className="thead-dark">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Grade</th>
    </tr>
  </thead>
);

export default TableHeader;