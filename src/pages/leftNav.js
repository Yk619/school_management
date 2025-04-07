import logo from '../logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './componenets/listItems';
 
const menuItems = [
    { name: 'Dashboard', redirect: '/dashboard' },
    { name: 'Students', redirect: '/students' },
    { name: 'Teachers', redirect: '/teachers' },
    { name: 'Subjects', redirect: '/subjects' },
    { name: 'ATeachers', redirect: '/teachers' }
];

const LeftNav = () => {
    return (
        <div className="bg-light p-3" style={{ width: '250px', height: '100vh' }}>
            <img src={logo} className="App-logo ps-5 mb-4" alt="logo" />
            <ul className="nav flex-column">
            {menuItems.map((item, index) => (
                <ListItem key={index} {...item} />
            ))}
            </ul>
        </div>
    );
};

export default LeftNav;
