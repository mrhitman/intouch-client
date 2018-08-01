import { Avatar, Button, Col, Divider, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PhotoDetail from '../common/PhotoDetail';

class Middle extends Component {
    render() {
        return (
            <Row style={{ textAlign: 'center' }}>
                <Col>
                    <img src="photo.jpg" alt="" style={{ height: 200, margin: 12 }} />
                    <Button type='primary' style={{ marginBottom: 10 }} >Send a message</Button>

                    <div>Unknown is your friend</div>
                    <Divider />

                    <div style={{ marginBottom: 10 }}>{this.props.followerCount} followers</div>
                    {this.renderPeople(this.props.followers)}
                    <Divider />

                    <div style={{ marginBottom: 10 }}>{this.props.friendCount} friends</div>
                    {this.renderPeople(this.props.friends)}
                    <Divider />
                </Col>
            </Row>
        );
    }

    renderPeople(people) {
        return (
            <Row justify='space-around' >
                {people.map(person => (
                    <Col key={person.id} span={7}>
                        <Avatar size="large" shape="square" src={person.photoMini} />
                        <Link to={`/${person.id}`}>
                            <div className="name">{person.name}</div>
                        </Link>
                    </Col>
                ))}
            </Row>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    followerCount: state.followerCount,
    friendCount: state.friendCount,
    followers: state.followers,
    friends: state.friends,
    ...ownProps,
});
const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Middle);
