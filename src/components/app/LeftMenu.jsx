import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

class LeftMenu extends Component {
    render() {
        return (
            <div className="left-menu">
                <ul>
                    <li><a href='#'><i className="fa fa-newspaper-o"></i>News</a></li>
                    <li><i className="fa fa-comment"></i>Feedback</li>
                    <li><i className="fa fa-envelope"></i>Messages</li>
                    <li><i className="fa fa-user"></i>Friends</li>
                    <li><i className="fa fa-users"></i>Communities</li>
                    <li><i className="fa fa-image"></i>Photos</li>
                    <li><i className="fa fa-bookmark"></i>Bookmarks</li>
                </ul>
                <div className="line"></div>
                <ul>
                    <li><i className="fa fa-question-circle"></i>Help</li>
                    <li><i className="fa fa-gear"></i>Settings</li>
                    <li><i className="fa fa-sign-out"></i>Logout</li>
                </ul>
            </div>
        );
    }
}

export default LeftMenu;