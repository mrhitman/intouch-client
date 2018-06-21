import React, {Component} from 'react';
import LeftMenu from './LeftMenu';
import Middle from './Middle';
import Profile from './Profile';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <LeftMenu/>
                <Middle/>
                <Profile/>
                <div className="wall">
                </div>
            </div>
        );
    }
}

export default Content;