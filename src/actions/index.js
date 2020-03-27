import flickr from '../api/flickr';

const userId = '&user_id=184012765@N08';
const albumsMethod = '&method=flickr.photosets.getList';
const photosMethod = '&method=flickr.photosets.getPhotos';
const photoMethod = '&method=flickr.photos.getInfo';
const sizeMethod = '&method=flickr.photos.getSizes';
const exifMethod = '&method=flickr.photos.getExif';

export const fetchAlbums = () => {
    return async (dispatch) => {    
        const response = await flickr.get(`&${process.env.REACT_APP_FLICKR_API_KEY}${userId}${albumsMethod}&format=json&nojsoncallback=1`);

        dispatch(
            { type: 'FETCH_ALBUMS', 
            payload:  response.data.photosets.photoset }
        )
    }
    
};

export const fetchPhotos = (albumId) => {
    return async (dispatch) => {
        const response = await flickr.get(`&${process.env.REACT_APP_FLICKR_API_KEY}${userId}&photoset_id=${albumId}${photosMethod}&format=json&nojsoncallback=1`);

        dispatch(
            { type: 'FETCH_PHOTOS',
            payload: response.data.photoset }
        )
    }
};

export const fetchPhoto = (photoId) => {
    return async (dispatch) => {
        const response = await flickr.get(`&${process.env.REACT_APP_FLICKR_API_KEY}${userId}&photo_id=${photoId}${photoMethod}&format=json&nojsoncallback=1`);

        dispatch(
            { type: 'FETCH_PHOTO',
            payload: response.data.photo }
        )
    }
};

export const fetchSizes = (photoId) => {
    return async (dispatch) => {
        const response = await flickr.get(`&${process.env.REACT_APP_FLICKR_API_KEY}${userId}&photo_id=${photoId}${sizeMethod}&format=json&nojsoncallback=1`);

        dispatch(
            { type: 'FETCH_SIZES',
            payload: response.data.sizes.size }
        )
    }
};

export const fetchMeta = (photoId) => {
    return async (dispatch) => {
        const response = await flickr.get(`&${process.env.REACT_APP_FLICKR_API_KEY}${userId}&photo_id=${photoId}${exifMethod}&format=json&nojsoncallback=1`);

        dispatch(
            { type: 'FETCH_META',
            payload: response.data.photo }
        )
    }
};