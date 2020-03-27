import { combineReducers } from 'redux';
import albumsReducer from '../reducers/albumsReducer';
import photosReducer from '../reducers/photosReducer';
import photoReducer from '../reducers/photoReducer';
import sizeReducer from '../reducers/sizeReducer';
import metaReducer from '../reducers/metaReducer';

export default combineReducers({
    albums: albumsReducer,
    photos: photosReducer,
    photo: photoReducer,
    size: sizeReducer,
    meta: metaReducer,
});