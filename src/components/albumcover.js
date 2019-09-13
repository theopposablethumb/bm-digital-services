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
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </figcaption>
            </figure>
        )
    }
} 

export default AlbumCover;