import { Col, Divider, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const toggleCss = {
    margin: '8px',
    textAlign: 'center',
    color: '#4c77a4',
    fontSize: '0.8em',
    fontWeight: 'bold',
    cursor: 'pointer',
};

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

class Profile extends Component {
    state = {
        short: true,
    };

    render() {
        const { active_user } = this.props;
        const profile = active_user.get('profile');
        const status = true;
        return (
            <div>
                <Row style={{ marginTop: 20, marginRight: 10 }}>
                    <Col span={18}>{profile.get('name')}</Col>
                    <Col span={4}>{status ? 'Online' : 'Offline'}</Col>
                </Row>
                <Row>
                    <Col>{profile.get('quote')}</Col>
                    <Divider />
                </Row>
                <Row>
                    <Col span={15}>Birthday:</Col>
                    <Col>{profile.get('birthday')}</Col>
                </Row>
                <Row>
                    <Col span={15}>Hometown:</Col>
                    <Col>{profile.get('town')}</Col>
                </Row>
                <Row>
                    <Col span={15}>Relationship status:</Col>
                    <Col>{Relationships[profile.get('relationship')]}</Col>
                </Row>
                <Row>
                    <Col span={15}>Company: </Col>
                    <Col>{profile.get('company')}</Col>
                </Row>
                <Row>
                    <Col span={15}>Language: </Col>
                    <Col>{profile.get('language')}</Col>
                </Row>
                {this.state.short ? this.renderShortInfo() : this.renderMoreInfo()}
                <Divider />
            </div >
        );
    }

    renderShortInfo() {
        return (
            <div>
                <div onClick={this.toggleInfo} style={toggleCss}>
                    Show more
                </div>
            </div>
        );
    }

    renderMoreInfo() {
        const { active_user } = this.props;
        const profile = active_user.get('profile');
        return (
            <div>
                <div onClick={this.toggleInfo} style={toggleCss}>
                    Show less
                </div>
                <Row>
                    <Col span={15}>Your life priorities:</Col>
                    <Col>{profile.priorities}</Col>
                </Row>
                <Row>
                    <Col span={15}>Your hobbies:</Col>
                    <Col>{profile.hobbies}</Col>
                </Row>
            </div>
        );
    }

    toggleInfo = () => {
        this.setState(({ short }) => ({ short: !short }));
    };
}

const mapStateToProps = state => state;
const mapDispatchToState = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToState,
)(Profile);
