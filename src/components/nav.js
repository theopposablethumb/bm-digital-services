import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    
    render () {
        return (
            <nav>
                <Link to="/">Home</Link>
                Digital Services
                <Link to="/photography">Photography</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        )
    }
}

export default Nav;