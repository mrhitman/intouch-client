import React, {Component} from 'react';
import LeftMenu from './LeftMenu';
import Middle from './Middle';
import Profile from './Profile';
import Wall from './Wall';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <LeftMenu/>
                <Middle/>
                <Profile/>
                <Wall/>
            </div>
        );
    }
}

export default Content;