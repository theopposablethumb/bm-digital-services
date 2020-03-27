import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from './Image';
import { fetchPhoto, fetchPhotos } from '../actions';

class PhotoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPhoto: this.props.location.state.photoId};
    }

    componentDidMount() {
        this.props.fetchPhoto(this.state.currentPhoto);
        this.props.fetchPhotos(this.props.location.state.albumId);
        //this.props.fetchSizes(this.state.currentPhoto);
    }

    renderTitle() {
        if (!this.props.photo.photo.title) {
            return <h1>Slow to impulse</h1>
        } else {
            return <h1>{this.props.photo.photo.title._content}</h1>
        }
    }

    renderPhoto() {
        if (!this.props.photo.photo.description) {
            return <p>Slow to impulse</p>
        } else {
            return <Image photoId={this.state.currentPhoto} title={this.props.photo.photo.title._content} alt={this.props.photo.photo.description._content} />
        }
    }

    selectNextPhoto(photoId) {
        photoId = this.state.currentPhoto;
        let photoArray = this.props.photo.photos.photo;
        let index = photoArray.findIndex(p => p.id === photoId); //find index of object key in array
        let nextPhoto;
        if(index >= 0 && index < photoArray.length - 1) {
            nextPhoto = photoArray[index +1].id;
        } else {
            nextPhoto = photoArray[index.length - 1].id;
        }
        this.setState({currentPhoto: nextPhoto});
    }

    async selectPrevPhoto(photoId) {
        photoId = this.state.currentPhoto;
        let photoArray = this.props.photo.photos.photo;
        let index = photoArray.findIndex(p => p.id === photoId); //find index of object key in array
        let prevPhoto;
        if(index > 0 && index < photoArray.length - 1) {
            prevPhoto = photoArray[index -1].id;
        } else {
            prevPhoto = photoArray[index].id;
        }
        this.setState({currentPhoto: prevPhoto});
    }

    render() {
        return (
            <div className="photograph">
                {this.renderTitle()}
                {this.renderPhoto()}
                
                <div className="navigation">
                    <button onClick={()=> this.selectPrevPhoto()} >Previous photo</button>
                    <button onClick={()=> this.selectNextPhoto()} >Next photo</button>
                
                    <Link to={{
                        pathname: `/photography/${this.props.match.params.album}`,
                        state: {albumId: this.props.location.state.albumId}
                    }}>
                        Back to gallery
                    </Link>
                </div>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return { photo: state };
}

export default connect(mapStateToProps, {fetchPhoto: fetchPhoto, fetchPhotos: fetchPhotos})(PhotoDetail);