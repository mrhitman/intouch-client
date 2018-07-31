import { Button, Col, Row } from 'antd';
import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
class Middle extends Component {
    state = {
        modalIsOpen: false,
    };

    render() {
        return (
            <div className="middle">
                <div className="photo">
                    <img src="photo.jpg" alt="" onClick={this.openModal} style={{ height: 200, margin: 12 }} />
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <Fragment>
                            <img src="photo-full.jpg" alt="" style={{ width: '800px' }} />
                            <div style={{ marginLeft: '10px', width: '300px', float: 'right', display: 'block' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi in magni
                                incidunt quidem architecto expedita accusantium, quas nobis illo nesciunt dignissimos
                                pariatur ea ullam aliquid doloremque, alias, delectus vel.Mollitia perferendis iure
                                quibusdam ipsam voluptatum tenetur, rem pariatur officia sunt velit porro esse, alias
                                quos molestias quod consequatur numquam exercitationem sed praesentium cumque ut. Soluta
                                ex temporibus modi quam?
                            </div>
                        </Fragment>
                    </Modal>
                </div>
                <Button type='primary'>Send a message</Button>
                <div>Unknown is your friend</div>
                <br />
                <div >{this.props.followerCount} followers</div>
                {this.renderPeople(this.props.followers)}
                <br />
                <div>{this.props.friendCount} friends</div>
                {this.renderPeople(this.props.friends)}
                <br />
            </div>
        );
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    renderPeople(people) {
        return (
            <Row>
                {people.map(person => (
                    <Col key={person.id} span={7}>
                        <img src={person.photoMini} alt="" style={{ width: 40, height: 40 }} />
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
