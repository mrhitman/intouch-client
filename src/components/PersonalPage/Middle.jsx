import { Avatar, Button, Col, Divider, Row } from 'antd';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Middle extends Component {
    render() {
        return (
            <Row style={{ textAlign: 'center' }}>
                <Col>
                    <img src="photo.jpg" alt="" style={{ height: 200, margin: 12 }} />
                    <Button type='primary' style={{ marginBottom: 10 }} >Send a message</Button>

                    {!!this.props.user.id && <div> {this.props.user.profile.name} is your friend</div>}
                    <Divider />

                    {this.props.followerCount > 0 &&
                        <Fragment>
                            <div style={{ marginBottom: 10 }}>{this.props.followerCount} followers</div>
                            {this.renderPeople(this.props.followers)}
                            <Divider />
                        </Fragment>
                    }

                    {this.props.friendCount > 0 &&
                        <Fragment>
                            <div style={{ marginBottom: 10 }}>{this.props.friendCount} friends</div>
                            {this.renderPeople(this.props.friends)}
                            <Divider />
                        </Fragment>
                    }
                </Col>
            </Row >
        );
    }

    renderPeople(people) {
        return (
            <Row justify='space-around' >
                {people.map(person => (
                    <Col key={person.id} span={7}>
                        <Avatar size="large" shape="square" src='photo-mini.jpg' />
                        <a href={`/${person.id}`}>
                            <div className="name" style={{ fontSize: 11 }}>{person.profile.name}</div>
                        </a>
                    </Col>
                ))}
            </Row>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    followerCount: state.friends.followers.length,
    friendCount: state.friends.friends.length,
    followers: state.friends.followers,
    friends: state.friends.friends,
    user: state.user,
    ...ownProps,
});
const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Middle);
