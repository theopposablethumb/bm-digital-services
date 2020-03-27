import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div>
                <p>&copy; Brendan Meachen {new Date().getFullYear()}. Hand crafted with HTML, CSS, and Javascript</p>
                <p>I also design and build websites! <Link to='/contact'>Contact me for more information</Link></p>
            </div>
        <ul>
                <li><a href="https://instagram.com/brenm">Instagram.com/brenm</a></li>
                <li> <a href="https://brenm.picfair.com">brenm.picfair.com</a></li>
            </ul>
        </footer>
    )
}

export default Footer;