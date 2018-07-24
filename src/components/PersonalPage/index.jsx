import React, { Component } from 'react';
import Header from '../common/Header';
import LeftMenu from '../common/LeftMenu';
import Photos from './Photos';
import Profile from './Profile';
import Wall from './Wall';
import Middle from './Middle';
import "../../styles/middle.css";
import "../../styles/rightPart.css";

class PersonalPage extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="app">
                <Header />
                <div className="content">
                    <LeftMenu />
                    <Middle />
                    <div className="rightPart">
                        <Profile user_id={match.params.id} />
                        <Photos />
                        <Wall />
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalPage;
