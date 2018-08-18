import { BackTop, Layout, Col, Row } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import Header from '../Common/Header';

class BasicLayout extends PureComponent {
    render() {
        return (
            <Layout>
                <BackTop />
                <Header />
                <Layout>
                    <Row>
                        <Col xl={4} lg={2} md={1} sm={0} style={{ background: '#FDFEFE' }} />
                        <Col>
                            <Col xl={16} lg={20} md={22} sm={24} style={{ background: '#FDFEFE', height: 'calc(100vh - 80px)' }}>
                                {this.props.children}
                            </Col>
                        </Col>
                        <Col xl={4} lg={2} md={1} sm={0} style={{ background: '#FDFEFE' }} />
                    </Row>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    login: payload => {
        dispatch({ type: Actions.login, payload: payload.data });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BasicLayout);
