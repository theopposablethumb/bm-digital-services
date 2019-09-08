import React from 'react';
import Logo from './logo';
import Nav from './nav';

class Header extends React.Component {
    
    render () {
        return (
            <header>
                <Logo />
                <Nav />
            </header>
        )
    }
}

export default Header;