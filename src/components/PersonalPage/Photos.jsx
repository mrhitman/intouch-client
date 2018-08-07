import { Divider } from 'antd';
import React, { Component } from 'react';

class Photos extends Component {
    render() {
        return (
            <div className="photos">
                <img src="photo.jpg" alt="" style={{ maxWidth: 230, maxHeight: 95, margin: 4 }} />
                <img src="photo.jpg" alt="" style={{ maxWidth: 230, maxHeight: 95, margin: 4 }} />
                <img src="photo.jpg" alt="" style={{ maxWidth: 230, maxHeight: 95, margin: 4 }} />
                <img src="photo.jpg" alt="" style={{ maxWidth: 230, maxHeight: 95, margin: 4 }} />
                <Divider />
            </div>
        );
    }
}

export default Photos;
