import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Feed</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
}

export default Navbar;
