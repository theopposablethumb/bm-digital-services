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

 /*   { "photosets": { "page": 1, "pages": 1, "perpage": 4, "total": 4, 
    "photoset": [
      { "id": "72157710825244592", "primary": "48726687912", "secret": "38b03724a2", "server": "65535", "farm": 66, "photos": 82, "videos": 0, 
        "title": { "_content": "Street" }, 
        "description": { "_content": "Street photography from around the world" }, "needs_interstitial": 0, "visibility_can_see_set": 1, "count_views": 0, "count_comments": 0, "can_comment": 0, "date_create": "1568379413", "date_update": "1568380852" },
      { "id": "72157710824310687", "primary": "48725878163", "secret": "5eaf757263", "server": "65535", "farm": 66, "photos": 37, "videos": 0, 
        "title": { "_content": "Portraits" }, 
        "description": { "_content": "Portraits of people I have met around the world" }, "needs_interstitial": 0, "visibility_can_see_set": 1, "count_views": 0, "count_comments": 0, "can_comment": 0, "date_create": "1568373329", "date_update": "1568380800" },
      { "id": "72157710823336551", "primary": "48726114616", "secret": "f216831f57", "server": "65535", "farm": 66, "photos": 27, "videos": 0, 
        "title": { "_content": "Landscapes" }, 
        "description": { "_content": "Landscape photography from around the world" }, "needs_interstitial": 0, "visibility_can_see_set": 1, "count_views": 0, "count_comments": 0, "can_comment": 0, "date_create": "1568370200", "date_update": "1568370666" },
      { "id": "72157710773833253", "primary": "48707713673", "secret": "986d43bf97", "server": "65535", "farm": 66, "photos": 60, "videos": 0, 
        "title": { "_content": "Awesome" }, 
        "description": { "_content": "" }, "needs_interstitial": 0, "visibility_can_see_set": 1, "count_views": 0, "count_comments": 0, "can_comment": 0, "date_create": "1568064346", "date_update": "1568380768" }
    ] }, "stat": "ok" } */


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
            console.log(album);
            return { album };
        })  
    }

    componentDidMount(){
        this.getAlbums();
    };

    render () {
        const albums = this.state.album.map((photo, key) =>
        <AlbumCover img={photo.imgUrl} title={photo.title._content} id={photo.id} description={photo.description._content} key={key} />      
      );
        return(
            <div className="gallery">
                { albums }
            </div>
        )
    }
}

export default Albums; 