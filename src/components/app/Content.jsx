import React, {Component} from 'react';
import LeftMenu from './LeftMenu';
import 'font-awesome/css/font-awesome.min.css';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <LeftMenu/>
                <div className="middle">
                    <div className="photo">
                        <img src="photo.jpg" />
                    </div>
                </div>
                <div className="profile">
                </div>
                <div className="wall">
                </div>
            </div>
        );
    }
}

export default Content;