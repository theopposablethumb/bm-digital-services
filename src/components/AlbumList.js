import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions';

class AlbumList extends React.Component {

    componentDidMount() {
        this.props.fetchAlbums();
    }

    renderTitle() {
        if (!this.props.location) {
            return <h2>Photography from around the world</h2>
        } else {
            return <h1>Photography from around the world</h1>
        }
    }

    renderAlbums() {
        return this.props.albums.map(album => {
            let imgUrl = `https://farm${album.farm}.staticflickr.com/${album.server}/${album.primary}_${album.secret}_w.jpg`;
            let imgTitle = album.title._content;
            let imgCaption = album.description._content;
            return (
                <figure className="album" key={album.id}>
                    <img src={imgUrl} alt={imgCaption} title={imgTitle} />
                    <figcaption>
                        <h2>
                            <Link to={{
                                pathname: `photography/${album.title._content.toLowerCase()}`,
                                state: {albumId: album.id, title: album.title._content, description: album.description._content}
                            }}>{imgTitle}</Link>
                        </h2>
                        <p>
                            <Link to={{
                                pathname: `photography/${album.title._content.toLowerCase()}`,
                                state: {albumId: album.id, title: album.title._content, description: album.description._content}
                            }}>{imgCaption}
                        </Link></p>
                    </figcaption>
                    
                </figure>
            )
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className="centered photography">
                {this.renderTitle()}
                {this.renderAlbums()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { albums: state.albums };
}

export default connect(mapStateToProps, {fetchAlbums: fetchAlbums})(AlbumList);