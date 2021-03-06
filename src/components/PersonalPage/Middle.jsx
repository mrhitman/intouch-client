import { Avatar, Col, Divider, Row } from 'antd'
import React, { Component, Fragment } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { baseUri } from '../../constats'
import Photo from './Photo'

class Middle extends Component {
    render() {
        const { account, active_user } = this.props
        return (
            <Row style={{ textAlign: 'center' }}>
                <Col>
                    <Photo />
                    {active_user.followers.size > 0 &&
                        <Fragment>
                            <div style={{ marginBottom: 10 }}>{active_user.followers.size} followers</div>
                            {this.renderPeople(active_user.followers)}
                            <Divider />
                        </Fragment>
                    }

                    {active_user.friends.size > 0 &&
                        <Fragment>
                            <div style={{ marginBottom: 10 }}>{active_user.friends.size} friends</div>
                            {this.renderPeople(active_user.friends)}
                            <Divider />
                        </Fragment>
                    }
                </Col>
            </Row >
        )
    }

    renderPeople(people) {
        const { active_user } = this.props
        return (
            <Row justify='space-around' >
                {people.map(person => (
                    <Col key={person.id} span={7}>
                        <a href={`/${person.id}`} >
                            <Avatar size='large' shape='square' src={`${baseUri}/mini_${person.profile.photo}`} />
                            <div className='name' style={{ fontSize: 11 }}>{person.profile.name}</div>
                        </a>
                    </Col>
                ))}
            </Row>
        )
    }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Middle)
