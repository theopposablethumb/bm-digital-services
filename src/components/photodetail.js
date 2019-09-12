import React from 'react';
import Image from './image';
import {Link} from 'react-router-dom'

const url = 'https://www.flickr.com/services/rest/?method=';
const getInfoMethod = 'flickr.photos.getInfo&';
const getExifMethod = 'flickr.photos.getExif&';
const getSizeMethod = 'flickr.photos.getSizes&';
const api_key = process.env.REACT_APP_FLICKR_API_KEY;
const query = '&format=json&nojsoncallback=1';
const infoEndPoint = `${url}${getInfoMethod}${api_key}${query}`;
const exifEndPoint = `${url}${getExifMethod}${api_key}${query}`;
const sizeEndPoint = `${url}${getSizeMethod}${api_key}${query}`


class PhotoDetail extends React.Component {
    state = {
      photo: {},
      exif: {},
      size: {}
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
          exif.make = exif.exif[5].raw._content;
          exif.model = exif.exif[6].raw._content;
          exif.camera = `${exif.make} ${exif.model}`
          exif.shutterSpeed = exif.exif[11].raw._content;
          exif.aperture = exif.exif[12].clean._content;
          exif.iso = exif.exif[14].raw._content;
          exif.focalLength = exif.exif[24].clean._content;
          exif.lens = exif.exif[27].raw._content;
          return { exif }; 
      })
  }

  getSize = async () => {
    const photoId = this.props.match.params.id;
    const apiCall = await fetch(sizeEndPoint + '&photo_id=' + photoId);
    const data = await apiCall.json();
    this.setState(prevState => {
      let size = Object.assign({}, prevState.size);
      size = data;
      size.height = size.sizes.size[11].height;
      size.width = size.sizes.size[11].width;
      return { size };
    })
  }

    componentDidMount(){
        this.getImage();
        this.getExif();
        this.getSize();
      }

      orientation() {
        if(this.state.size.height > this.state.size.width){
          return (
              <div className="card portrait">
                <Image img={this.state.photo.imgUrl} alt={this.state.photo.title} caption={this.state.photo.caption} date={this.state.photo.date} camera={this.state.exif.camera} lens={this.state.exif.lens} focal={this.state.exif.focalLength} shutter={this.state.exif.shutterSpeed} fstop={this.state.exif.aperture} iso={this.state.exif.iso} />
              </div>
          );
        } else {
          return (
            <div className="card landscape">
              <Image img={this.state.photo.imgUrl} alt={this.state.photo.title} caption={this.state.photo.caption} date={this.state.photo.date} camera={this.state.exif.camera} lens={this.state.exif.lens} focal={this.state.exif.focalLength} shutter={this.state.exif.shutterSpeed} fstop={this.state.exif.aperture} iso={this.state.exif.iso} />
            </div>
          );
        }
      }

  render () {
    return(
      <div>
        <Link className='breadcrumb' to='/photography'>Back to gallery</Link>
        {this.orientation()}
      </div>
    )
  };
}

export default PhotoDetail;