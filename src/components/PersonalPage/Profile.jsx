import { Divider } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import api from '../../services/api';
import { Row, Col } from 'antd';

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
        const profile = active_user.profile;
        const status = true;
        return (
            <div>
                <Row style={{ margin: '20px 0 0 10px' }}>
                    <Col span={18}>{profile.name}</Col>
                    <Col span={4}>{status ? 'Online' : 'Offline'}</Col>
                </Row>
                <Row>
                    <Col>{profile.quote}</Col>
                    <Divider />
                </Row>
                <Row>
                    <Col span={15}>Birthday:</Col>
                    <Col>{profile.birthday}</Col>
                </Row>
                <Row>
                    <Col span={15}>Hometown:</Col>
                    <Col>{profile.town}</Col>
                </Row>
                <Row>
                    <Col span={15}>Relationship status:</Col>
                    <Col>{Relationships[profile.relationship]}</Col>
                </Row>
                <Row>
                    <Col span={15}>Company: </Col>
                    <Col>{profile.company}</Col>
                </Row>
                <Row>
                    <Col span={15}>Language: </Col>
                    <Col>{profile.language}</Col>
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
        const { profile } = this.props.active_user;
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
