import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/' > [Home]</Link>
            <Link to='/users' > [All Users]</Link>
            <Link to='/users/123' > [User 123]</Link>
            <Link to='/users/me' > [User me]</Link>
        </nav>
    );
};

export default Nav;