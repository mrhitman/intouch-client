import { Avatar, Button, Col, Divider, Row } from 'antd';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Middle extends Component {
    render() {
        const { account, active_user } = this.props;
        return (
            <Row style={{ textAlign: 'center' }}>
                <Col>
                    <img src="photo.jpg" alt="" style={{ height: 200, margin: 12 }} />
                    {account.id != active_user.id && <Button type='primary' style={{ marginBottom: 10 }} ><a href={`/messages/${active_user.id}`}>Send a message</a></Button>}
                    {account.id != active_user.id && <div>{active_user.profile.name} is your friend</div>}
                    <Divider />

                    {active_user.followers.length > 0 &&
                        <Fragment>
                            <div style={{ marginBottom: 10 }}>{active_user.followers.length} followers</div>
                            {this.renderPeople(active_user.followers)}
                            <Divider />
                        </Fragment>
                    }

                    {active_user.friends.length > 0 &&
                        <Fragment>
                            <div style={{ marginBottom: 10 }}>{active_user.friends.length} friends</div>
                            {this.renderPeople(active_user.friends)}
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
                        <Link to={`/${person.id}`}>
                            <div className="name" style={{ fontSize: 11 }}>{person.profile.name}</div>
                        </Link>
                    </Col>
                ))}
            </Row>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Middle);
