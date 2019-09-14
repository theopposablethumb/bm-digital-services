import React from 'react';
import Image from './image';
import Intro from './intro';
import Breadcrumb from './breadcrumb';

const url = 'https://www.flickr.com/services/rest/?method=';
const method = 'flickr.photosets.getPhotos&';
const api_key = process.env.REACT_APP_FLICKR_API_KEY;
const query = '&user_id=184012765%40N08&extras=date_taken,description&format=json&nojsoncallback=1';
const endPoint = `${url}${method}${api_key}${query}`;




class AlbumGallery extends React.Component {
    state = {
        photo: []
    }
    
    getImage = async () => {
        const albumId = this.props.match.params.album;
        const apiCall = await fetch(endPoint + '&photoset_id=' + albumId);
        const data = await apiCall.json();
        const photoObject = data.photoset.photo;
        photoObject.ids = [];
        photoObject.forEach((photo) => {
            photoObject.ids.push(photo.id);
            let farm = photo.farm;
            let server = photo.server;
            let id = photo.id;
            let secret = photo.secret;
            let imgSrc = 'https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_n.jpg';
            photo.imgUrl = imgSrc;
        })
        this.setState(prevState => {
            let photo = Object.assign({}, prevState.photo);
            photo = photoObject;
            return { photo };
          })
    }

    componentDidMount() {
        this.getImage();
    }

    render () {
        const images = this.state.photo.map((photo, key) =>
          <Image img={photo.imgUrl} title={photo.title} alt={photo.description._content} album={this.props.match.params.album} id={photo.id} key={key} />      
        );
    
        return (
          <main>
            <Intro album={this.props.match.params.album} />
            <div className="gallery">
                {images}
            </div>
            <Breadcrumb />
          </main>
        )
    }

}

export default AlbumGallery;