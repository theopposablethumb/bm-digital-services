import React from 'react';
import Image from './image';

const url = 'https://www.flickr.com/services/rest/?method=';
const getInfoMethod = 'flickr.photos.getInfo&';
const getExifMethod = 'flickr.photos.getExif&';
const api_key = process.env.REACT_APP_FLICKR_API_KEY;
const query = '&format=json&nojsoncallback=1';
const infoEndPoint = `${url}${getInfoMethod}${api_key}${query}`;
const exifEndPoint = `${url}${getExifMethod}${api_key}${query}`;


class PhotoDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
      photo: {},
      exif: {}
    };

    getImage = async () => {
        const photoId = this.props.match.params.id;
        const apiCall = await fetch(infoEndPoint + '&photo_id=' + photoId);
        const data = await apiCall.json();
        let farm = data.photo.farm;
        let server = data.photo.server;
        let id = data.photo.id;
        let secret = data.photo.secret;
        let imgSrc = 'https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_b.jpg';
        data.photo.imgUrl = imgSrc;
        this.setState(prevState => {
            let photo = Object.assign({}, prevState.photo);
            photo = data.photo;
            photo.title = data.photo.title._content;
            photo.caption = data.photo.description._content;
            photo.date = data.photo.dates.taken.slice(0, 10);
            photo.id = id;
            return { photo };
        })
    }
    
    getExif = async () => {
      const photoId = this.props.match.params.id;
      const apiCall = await fetch(exifEndPoint + '&photo_id=' + photoId);
      const data = await apiCall.json();
      this.setState(prevState => {
          let exif = Object.assign({}, prevState.exif);
          exif = data.photo;
          exif.camera = data.photo.camera;
          exif.shutterSpeed = exif.exif[9].clean._content;
          exif.aperture = exif.exif[10].clean._content;
          exif.iso = exif.exif[12].raw._content;
          exif.focalLength = exif.exif[22].raw._content;
          exif.lens = exif.exif[25].raw.content;
          return { exif };
      })
  }


    componentDidMount(){
        this.getImage();
 //       this.getExif();
      }

  render () {
    return(
        <div className="card">
          <Image img={this.state.photo.imgUrl} alt={this.state.photo.title} caption={this.state.photo.caption} date={this.state.photo.date} />
          <ul>
            <li>{this.state.exif.camera}</li>
            <li>{this.state.exif.shutterSpeed}</li>
            <li>{this.state.exif.aperture}</li>
            <li>{this.state.exif.iso}</li>
            <li>{this.state.exif.focalLength}</li>
            <li>{this.state.exif.lens}</li>
          </ul>
        </div>
    )
  };
}

export default PhotoDetail;