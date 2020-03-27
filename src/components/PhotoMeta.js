import React from 'react';
import { connect } from 'react-redux';
import { fetchMeta } from '../actions';

class PhotoMeta extends React.Component {

    componentDidMount() {
        this.props.fetchMeta(this.props.photoId);
    }

    renderMeta() {
        if (!this.props.meta.meta) {
            return <p>fire when ready</p>
        } else {
            return(
                <ul className="meta">
                    <li>{this.props.meta.meta.exif[5].raw._content}</li>
                    <li>{this.props.meta.meta.exif[6].raw._content}</li>
                    <li>{this.props.meta.meta.camera}</li>
                    <li>{this.props.meta.meta.exif[11].raw._content}</li>
                    <li>{this.props.meta.meta.exif[12].clean._content}</li>
                    <li>{this.props.meta.meta.exif[14].raw._content}</li>
                    <li>{this.props.meta.meta.exif[24].clean._content}</li>
                    <li>{this.props.meta.meta.exif[27].raw._content}</li>
                </ul>
            )
        }
    }

    render() {
        return <>{this.renderMeta()}</>
    }
}

const mapStateToProps = (state) => {
    return { meta: state };
}

export default connect(mapStateToProps, { fetchMeta: fetchMeta })(PhotoMeta);