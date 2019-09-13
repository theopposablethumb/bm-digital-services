import React from 'react';
import Image from './image';


const url = 'https://www.flickr.com/services/rest/?method=';
const method = 'flickr.people.getPhotos&';
const api_key = process.env.REACT_APP_FLICKR_API_KEY;
const query = '&user_id=184012765%40N08&extras=date_taken,description&format=json&nojsoncallback=1';
const endPoint = `${url}${method}${api_key}${query}`;

class Gallery extends React.Component {
  state = {
      photo: []
    };

  getImages = async () => {
    const apiCall = await fetch(endPoint);
    const data = await apiCall.json();
    const photoObject = data.photos.photo;
    photoObject.forEach((photo) => {
      let farm = photo.farm;
      let server = photo.server;
      let id = photo.id;
      let secret = photo.secret;
      let imgSrc = 'https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_n.jpg';
      photo.imgUrl = imgSrc;
      delete photo.farm;
      delete photo.isfamily;
      delete photo.isfriend;
      delete photo.ispublic;
      delete photo.owner;
      delete photo.secret;
      delete photo.server;
    })
    this.setState(prevState => {
      let photo = Object.assign({}, prevState.photo);
      photo = photoObject;
      return { photo };
    })
  }

  componentDidMount(){
    this.getImages();
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
    
  };
}

export default Gallery;