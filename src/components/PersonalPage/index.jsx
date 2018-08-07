import { Col, Row } from 'antd';
import React, { Component } from 'react';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';
import Middle from './Middle';
import Photos from './Photos';
import Profile from './Profile';
import Wall from './Wall';

class PersonalPage extends Component {
    render() {
        const { match } = this.props;
        return (
            <Layout>
                <Row>
                    <Col lg={5} xxl={4}>
                        <LeftMenu />
                    </Col>
                    <Col lg={6} xxl={4}>
                        <Middle />
                    </Col>
                    <Col lg={13} xxl={10}>
                        <Profile user_id={match.params.id} />
                        <Photos />
                        <Wall />
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default PersonalPage;
