import React from 'react';
import Image from './image';

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
        photoObject.forEach((photo) => {
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
          <Image img={photo.imgUrl} alt={photo.title} id={photo.id} key={key} />      
        );
    
        return (
          <div className="gallery">
                {images}
          </div>
        )
    }

}

export default AlbumGallery;