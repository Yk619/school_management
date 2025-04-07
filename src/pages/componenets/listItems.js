import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ name, redirect }) => (
  <li className="nav-item mb-3" style={{ fontWeight: 'bold' }}>
    <Link className="nav-link" to={redirect}>
        {name}
    </Link>
  </li>
);

export default ListItem;