import { Col, Collapse, Divider, Icon, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const Relationships = [
    "Single",
    "In a relationship",
    "Engaged",
    "Married",
    "It's complicated",
    "It's open to relationship",
    "Widowed",
    "Separated",
    "Divorced",
];

const rowClass = {
    marginTop: 8,
    marginBottom: 8,
};

class Profile extends Component {
    render() {
        const { active_user, isLoading } = this.props;
        const profile = active_user.get('profile');
        const status = true;
        if (isLoading) {
            return <Icon type="loading" />
        }
        return (
            <Collapse accordion={false} bordered={false} defaultActiveKey={['1']} style={{ marginBottom: 40 }}>
                <Collapse.Panel key="1" showArrow={false} disabled>
                    <Row style={{ marginTop: 20, fontSize: 16, ...rowClass }}>
                        <Col span={18}>{profile.get('name')}</Col>
                        <Col span={4}>{status ? 'Online' : 'Offline'}</Col>
                    </Row>
                    <Row style={rowClass}>
                        <Col>{profile.get('quote')}</Col>
                        <Divider />
                    </Row>
                    <Row style={rowClass}>
                        <Col span={15}>Birthday:</Col>
                        <Col>{profile.get('birthday')}</Col>
                    </Row>
                    <Row style={rowClass}>
                        <Col span={15}>Country:</Col>
                        <Col>{profile.get('country')}</Col>
                    </Row>
                    <Row style={rowClass}>
                        <Col span={15}>City:</Col>
                        <Col>{profile.get('city')}</Col>
                    </Row>
                    <Row style={rowClass}>
                        <Col span={15}>Hometown:</Col>
                        <Col>{profile.get('home_town')}</Col>
                    </Row>
                    <Row style={rowClass}>
                        <Col span={15}>Relationship status:</Col>
                        <Col>{Relationships[profile.get('relation')]}</Col>
                    </Row>
                    <Row style={rowClass}>
                        <Col span={15}>Company: </Col>
                        <Col>{profile.get('company')}</Col>
                    </Row>
                    <Row style={rowClass}>
                        <Col span={15}>Language: </Col>
                        <Col>{profile.get('language')}</Col>
                    </Row>
                </Collapse.Panel>
                <Collapse.Panel key="2" header='Additional info' showArrow={false}>
                    <Row style={rowClass}>
                        <Col span={15}>Your life priorities:</Col>
                        <Col>{profile.priorities}</Col>
                    </Row>
                    <Row style={rowClass}>
                        <Col span={15}>Your hobbies:</Col>
                        <Col>{profile.hobbies}</Col>
                    </Row>
                    <Row style={rowClass}>
                        <Col span={15}>Favourite books:</Col>
                        <Col>{profile.books}</Col>
                    </Row>
                </Collapse.Panel>
            </Collapse>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToState = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToState,
)(Profile);
