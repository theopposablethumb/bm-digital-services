import React from 'react';

    const url = 'https://www.flickr.com/services/rest/?method=';
    const method = 'flickr.photosets.getPhotos&';
    const api_key = process.env.REACT_APP_FLICKR_API_KEY;
    const query = '&user_id=184012765%40N08&extras=date_taken,description&format=json&nojsoncallback=1';
    const endPoint = `${url}${method}${api_key}${query}`;

const PhotoContext = React.createContext({
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
});

export const PhotoProvider = PhotoContext.Provider
export default PhotoContext