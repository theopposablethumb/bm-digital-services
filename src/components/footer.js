import React from 'react';
import Social from './social';

class Footer extends React.Component {

    render() {
        return(
            <footer>
                <p>&copy; Brendan Meachen {(new Date().getFullYear())}<br />Built with React.js</p>
                <Social />
            </footer>
        )
    }
}

export default Footer;