import React from 'react';

const url = 'https://www.flickr.com/services/rest/?method=';
const method = 'flickr.photosets.getInfo&';
const api_key = process.env.REACT_APP_FLICKR_API_KEY;
const userID = '&user_id=184012765%40N08&';
const query = '&format=json&nojsoncallback=1';
const endPoint = `${url}${method}${api_key}${userID}${query}`;

class Intro extends React.Component {
    state = {
        albumInfo: {}
    }

    getAlbumInfo = async () => {
        const album = '&photoset_id=' + this.props.album;
        const apiCall = await fetch(endPoint + album);
        const data = await apiCall.json();
        this.setState(prevState => {
            let albumInfo = Object.assign({}, prevState.albumInfo);
            albumInfo = data.photoset;
            albumInfo.title = data.photoset.title._content;
            albumInfo.description = data.photoset.description._content;
            return { albumInfo };
        })
    }
    
    componentDidMount() {
        this.getAlbumInfo();
    }

    render() {

        return(
            <div className="intro">
                <h1>{this.state.albumInfo.title}</h1>
                <p>{this.state.albumInfo.description}</p>
            </div>         
        )
    }
}

export default Intro;