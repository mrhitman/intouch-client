import React, { Component } from 'react';
import Layout from '../common/Layout';
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
            <Layout>
                <LeftMenu />
                <Middle />
                <div className="rightPart">
                    <Profile user_id={match.params.id} />
                    <Photos />
                    <Wall />
                </div>
            </Layout>
        );
    }
}

export default PersonalPage;
