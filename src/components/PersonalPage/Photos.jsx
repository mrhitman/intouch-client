import { Divider } from 'antd';
import React, { Component } from 'react';

class Photos extends Component {
    render() {
        return (
            <div className="photos">
                <img src="photo.jpg" alt="" />
                <img src="photo.jpg" alt="" />
                <img src="photo.jpg" alt="" />
                <img src="photo.jpg" alt="" />
                <Divider />
            </div>
        );
    }
}

export default Photos;
