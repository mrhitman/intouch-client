import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

class LeftMenu extends Component {
    render() {
        return (
            <div className="left-menu">
                <ul>
                    <li><Link to='/personal_page'><i className="fa fa-file-text-o"></i>My page</Link></li>
                    <li><Link to='/news'><i className="fa fa-newspaper-o"></i>News</Link></li>
                    <li><Link to=''><i className="fa fa-comment"></i>Feedback</Link></li>
                    <li><Link to=''><i className="fa fa-envelope"></i>Messages</Link></li>
                    <li><Link to=''><i className="fa fa-user"></i>Friends</Link></li>
                    <li><Link to=''><i className="fa fa-users"></i>Communities</Link></li>
                    <li><Link to=''><i className="fa fa-image"></i>Photos</Link></li>
                    <li><Link to=''><i className="fa fa-bookmark"></i>Bookmarks</Link></li>
                </ul>
                <div className="line"></div>
                <ul>
                    <li><Link to=''><i className="fa fa-question-circle"></i>Help</Link></li>
                    <li><Link to=''><i className="fa fa-gear"></i>Settings</Link></li>
                    <li><Link to=''><i className="fa fa-sign-out"></i>Logout</Link></li>
                </ul>
            </div>
        );
    }
}

export default LeftMenu;