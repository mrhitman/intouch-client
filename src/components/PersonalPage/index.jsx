import React, { Component } from 'react';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';
import Photos from './Photos';
import Profile from './Profile';
import Wall from './Wall';
import Middle from './Middle';
import { Row, Col } from 'antd';
import "../../styles/rightPart.css";

class PersonalPage extends Component {
    render() {
        const { match } = this.props;
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={6}>
                        <Middle />
                    </Col>
                    <Col span={13}>
                        <div className="rightPart">
                            <Profile user_id={match.params.id} />
                            <Photos />
                            <Wall />
                        </div>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default PersonalPage;
