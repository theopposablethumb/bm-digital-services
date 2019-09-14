import React from 'react';
import {Link} from 'react-router-dom';

class AlbumCover extends React.Component {
    render() {
        return (
            <figure className="album">
                <Link to={`/photography/${this.props.id}`}>
                    <img src={this.props.img} alt={this.props.title} />
                </Link>
                <figcaption>
                    <h2><Link to={`/photography/${this.props.id}`}>{this.props.title}</Link></h2>
                </figcaption>
            </figure>
        )
    }
} 

export default AlbumCover;