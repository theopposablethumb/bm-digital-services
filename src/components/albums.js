import React from 'react';
import AlbumCover from './albumcover';

const url = 'https://www.flickr.com/services/rest/?method=';
const method = 'flickr.photosets.getList&';
const api_key = process.env.REACT_APP_FLICKR_API_KEY;
const query = '&user_id=184012765%40N08&format=json&nojsoncallback=1';
const endPoint = `${url}${method}${api_key}${query}`;

class Albums extends React.Component {
    state = {
        album: []
    }

    getAlbums = async () => {
        const apiCall = await fetch(endPoint);
        const data = await apiCall.json();
        const photoObject = data.photosets.photoset;
        photoObject.forEach((photoset) => {
            let farm = photoset.farm;
            let server = photoset.server;
            let id = photoset.primary;
            let secret = photoset.secret;
            let imgSrc = 'https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_c.jpg';
            photoset.imgUrl = imgSrc;
        })
        this.setState(prevState => {
            let album = Object.assign({}, prevState.album);
            album = photoObject;
            return { album };
        })  
    }

    componentDidMount(){
        this.getAlbums();
    };

    render () {
        const albums = this.state.album.map((photo, key) =>
        <AlbumCover img={photo.imgUrl} title={photo.title._content} id={photo.id} key={key} />      
      );
        return(
          <>
            <div className="intro">
              <h1>Photography</h1>
              <p>Photography has been a hobby and passion of mine for 15 years, and for the past 6 years I've been combining my photography with world travel. For me photography is about sharing what I see, telling stories, and finding beauty everywhere in the world even the unexpected places.</p>
            </div>
            <div className="gallery">
              { albums }
            </div>
          </>
        )
    }
}

export default Albums; 