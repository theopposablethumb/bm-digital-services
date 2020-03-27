import React from 'react';
import { connect } from 'react-redux';
import { fetchSizes, fetchPhoto } from '../../actions';
import PhotoMeta from './PhotoMeta';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {photoId: this.props.photoId, photoUrl: null, alt: null, title: null};
    }

    componentDidMount() {
        this.props.fetchPhoto(this.state.photoId);
        this.props.fetchSizes(this.state.photoId);
    }

    componentDidUpdate(prevProps) {
        if(this.props.photoId !== prevProps.photoId) {
            this.props.fetchPhoto(this.props.photoId); 
            this.props.fetchSizes(this.props.photoId);
            this.setState(
                {
                    photoId: this.props.photoId,
                    photoUrl: this.props.image.size[this.props.image.size.length - 1].source, 
                    alt: this.props.image.photo.description._content, 
                    title: this.props.image.photo.title._content
                }
            );
        }
      }

    renderImage() {
        if (this.props.image.size.length > 0) {
            return <img src={this.props.image.size[this.props.image.size.length - 3].source} alt={this.props.alt} title={this.props.title} />
        } else { 
            return <p>Engage!</p>
        }
    }

    orientation() {
        let sizeArray = this.props.image.size;
        if(sizeArray.length === 0) {
            return null;
        } else {
            if(sizeArray[sizeArray.length - 3].height > sizeArray[sizeArray.length - 3].width){
            return 'portrait';
            } else {
            return 'landscape';
            } 
        }
      }

    render() {
        return (
            <figure className={`photo ${this.orientation()}`}>
                {this.renderImage()}
                <figcaption>
                    <p>{this.props.alt}</p>
                        <PhotoMeta photoId={this.state.photoId} />
                    </figcaption>
                </figure>
        )       
    }
}

const mapStateToProps = (state) => {
    return { image: state };
}

export default connect(mapStateToProps, {fetchSizes: fetchSizes, fetchPhoto: fetchPhoto})(Image);