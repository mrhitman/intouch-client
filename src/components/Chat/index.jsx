import React, { Component } from 'react';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';
import { Row, Col } from 'antd';


class Chat extends Component {
    render() {
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        Chat
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default Chat;