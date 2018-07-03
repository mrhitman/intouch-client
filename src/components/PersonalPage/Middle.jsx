import React, { Component } from "react";
import Modal from 'react-modal';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Middle extends Component {
  state = {
    modalIsOpen: false
  };

  render() {
    return (
      <div className="middle">
        <div className="photo">
          <img src="photo.jpg" alt="" onClick={this.openModal}/>
          <Modal
            isOpen={this.state.modalIsOpen}
            // onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <img src="photo.jpg" alt="" onClick={this.openModal}/>
          </Modal>
        </div>
        <div className="sendButton">Send a message</div>
        <div className="info">Unknown is your friend</div>
        <div className="line" />
        <div>
          <div className="status">{this.props.followerCount} followers</div>
          {this.renderPeople(this.props.followers)}
          <div className="line" />
          <div className="status">{this.props.friendCount} friends</div>
          {this.renderPeople(this.props.friends)}
        </div>
        <div className="line" />
      </div>
    );
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  renderPeople(people) {
    return (
      <div className="people">
        {people.map(person => (
          <div className="person" key={person.id}>
            <img src={person.photoMini} alt="" />
            <Link to="/">
              <div className="name">{person.name}</div>
            </Link>
          </div>
        ))}
      </div>
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
  mapDispatchToProps
)(Middle);
