import React from 'react';
import {Link} from 'react-router-dom';

class Logo extends React.Component {

    render() {
        return(
            <h1>
                <Link to="/">BM Digital Services Ltd</Link>
            </h1>
        )
    }
}

export default Logo;