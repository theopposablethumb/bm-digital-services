import React from 'react';
import {Link} from 'react-router-dom';


class Image extends React.Component {
    
    renderImgDetails() {
        if(!this.props.caption && !this.props.date) {
            return null;
        } else {
            return (
                <figcaption>
                    <p>{this.props.caption}</p>
                    <p>{this.props.date}</p>
                </figcaption>
            );
        }
    };

    render() {
        return (
            <figure>
                <Link to={`/photography/${this.props.id}`}>
                    <img src={this.props.img} alt={this.props.alt} title={this.props.alt} />
                </Link>
                {this.renderImgDetails()}
            </figure>
        )
    }
}

export default Image;