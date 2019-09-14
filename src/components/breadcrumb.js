import React from 'react';
import {Link} from 'react-router-dom'

class Breadcrumb extends React.Component {

    renderBreadcrumb() {
        if(!this.props.url) {
            return (
                <div className='breadcrumb'>
                    <Link to={'/photography'}>Back to albums</Link>
                </div>
            );
        } else {
            return (
                <div className='breadcrumb'>
                    <Link to={`/photography/${this.props.url}`}>Back to gallery</Link>
                </div>
            );
        }
    };

    render () {
        return(
            this.renderBreadcrumb()
        )
    }
}

export default Breadcrumb;