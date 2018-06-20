import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title">in touch</div>
                <div className="find">
                    <input type="text" size="30" placeholder="Search"/>
                    <i id="search-icon" className="fa fa-search"></i>
                </div>
                <div className="message-badge" data-badge="1">
                    <i className="fa fa-envelope" ></i>
                </div>
                <div className="notify-badge" data-badge="3">
                    <i className="fa fa-comment"></i>
                </div>
                <div className="profile">
                    <i className="fa fa-user"></i>
                </div>
            </div>
        );
    }
}

export default Header;