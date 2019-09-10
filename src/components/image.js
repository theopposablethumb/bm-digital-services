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
                    <ul className="meta">
                        <li>Camera: {this.props.camera}</li>
                        <li>Lens: {this.props.lens}</li>
                        <li>Focal length: {this.props.focal}</li>
                        <li>Shutter speed: {this.props.shutter}</li>
                        <li>Aperture: {this.props.fstop}</li>
                        <li>ISO: {this.props.iso}</li>
                    </ul>
                    <p className="date">{this.props.date}</p>
                </figcaption>
            );
        }
    };

    render() {
        return (
            <figure>
                <Link to={`/photography/${this.props.id}`}>
                    <img src={this.props.img} alt={this.props.alt} title={this.props.title} />
                </Link>
                {this.renderImgDetails()}
            </figure>
        )
    }
}

export default Image;