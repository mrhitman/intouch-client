import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <div className="middle">
                <div className="photo">
                    <img src="photo.jpg" alt="" />
                </div>
                <div className="sendButton">
                    Send a message
                </div>
                <div className="info">
                    Unknown is your friend
                </div>
                <div className="line"></div>
                <div className="followers">
                    <div className="status">
                        33 follower
                    </div>
                    <img src="photo-mini.jpg" alt=""/>
                    <img src="photo-mini.jpg" alt=""/>
                    <img src="photo-mini.jpg" alt=""/>
                </div>
                <div className="line"></div>
                <div className="followers">
                    <div className="status">
                        33 friends
                    </div>
                    <img src="photo-mini.jpg" alt=""/>
                    <img src="photo-mini.jpg" alt=""/>
                    <img src="photo-mini.jpg" alt=""/>
                </div>
            </div>
        );
    }
}

export default Content;