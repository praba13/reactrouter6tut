import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            {/*<Link to='/' > [Home]</Link> */}
            <Link to='/' state={{ val: 123 }}> [Home]</Link>
            <Link to='/users' > [All Users]</Link>
            <Link to='/users/123' > [User 123]</Link>
            <Link to='/users/me' > [User me]</Link>
            <NavLink state={{ val: 456 }} to='/loc?id=4569&name=bob#someHash' style={({ isActive }) => ({ color: isActive ? 'red' : 'gold' })} className={({ isActive }) => { }}>useLocation</NavLink>
        </nav>
    );
};

export default Nav;