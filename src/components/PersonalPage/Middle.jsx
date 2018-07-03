import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

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
    modalIsOpen: true
  }

  render() {
    return (
      <div className="middle">
        <div className="photo">
          <img src="photo.jpg" alt="" onClick={this.openModal}/>
          <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div>
                    <img src="photo-full.jpg" alt="" style={{ width: '800px' }} />
                    <div style={{marginLeft: '10px', width: '300px', float: 'right', display: 'block'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi in magni incidunt quidem architecto expedita accusantium, quas nobis illo nesciunt dignissimos pariatur ea ullam aliquid doloremque, alias, delectus vel.Mollitia perferendis iure quibusdam ipsam voluptatum tenetur, rem pariatur officia sunt velit porro esse, alias quos molestias quod consequatur numquam exercitationem sed praesentium cumque ut. Soluta ex temporibus modi quam?
                    </div>
                </div>
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
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

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
