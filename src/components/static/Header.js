import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
			<h1>Brendan Meachen Photography</h1>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/photography'>Photography</NavLink>
				
				<NavLink to='/contact'>Contact</NavLink>
			</nav>
		</header>
    )
}

export default Header;