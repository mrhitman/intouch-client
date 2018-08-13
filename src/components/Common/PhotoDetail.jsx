import React, { Component, Fragment } from "react";
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

class PhotoDetail extends Component {
    state = {
        modalIsOpen: false
    }
    render() {
        const { modalIsOpen } = this.state;
        return (
            <Fragment>
                {this.props.children}
                <Modal
                    isOpen={modalIsOpen}
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
            </Fragment>

        );
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };
}

export default PhotoDetail;