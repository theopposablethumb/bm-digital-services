import React from 'react';
import {Link} from 'react-router-dom';

class Image extends React.Component {
    
    
    renderImage() {
        if(!this.props.id) {
            return (
                <img src={this.props.img} alt={this.props.caption} title={this.props.alt} />
            );
        } else {
            return (
                <Link to={`/photography/photo/${this.props.id}`}>
                    <img src={this.props.img} alt={this.props.caption} title={this.props.alt} />
                </Link>
            );
        }
    };

    renderImgDetails() {
        if(!this.props.caption && !this.props.date) {
            return null;
        } else {
            return (
                <figcaption>
                    <h2>{this.props.alt}</h2>
                    <p>{this.props.caption}</p>
                    <p className="date icon-calendar">{this.props.date}</p>
                    <ul className="meta">
                        <li className="icon-camera">Camera: {this.props.camera}</li>
                        <li className="icon-isight">Lens: {this.props.lens}</li>
                        <li className="icon-isight">Focal length: {this.props.focal}</li>
                        <li className="icon-aperture">Shutter speed: {this.props.shutter}</li>
                        <li className="icon-aperture">Aperture: {this.props.fstop}</li>
                        <li className="icon-camera">ISO: {this.props.iso}</li>
                    </ul>
                </figcaption>
            );
        }
    };

    render() {
        return (
            <figure>
                {this.renderImage()}
                {this.renderImgDetails()}
            </figure>
        )
    }
}

export default Image;