import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Chance from 'chance';

class Content extends Component {
    render() {
        const followerCount = 5;
        const followers = [
            { id: 1, name: new Chance().word()},
            { id: 2, name: new Chance().word()},
            { id: 3, name: new Chance().word()},
        ];
        const frientCount = 8;
        const friends = [
            { id: 1, name: new Chance().word()},
            { id: 2, name: new Chance().word()},
            { id: 3, name: new Chance().word()},
            { id: 4, name: new Chance().word()},
            { id: 5, name: new Chance().word()},
            { id: 6, name: new Chance().word()},
            { id: 7, name: new Chance().word()},
            { id: 8, name: new Chance().word()},
        ];
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
                <div>
                    <div className="status">
                        {followerCount} followers
                    </div>
                    {this.renderPeople(followers)}
                    <div className="line"></div>
                    <div className="status">
                        {frientCount} friends
                    </div>
                    {this.renderPeople(friends)}
                </div>
                <div className="line"></div>
            </div>
        );
    }

    renderPeople(people) {
         return (
                <div className="people">
                    {people.map((person) => (
                        <div className="person" key={person.id}>
                            <img src="photo-mini.jpg" alt=""/>
                            <a href="#">
                                <div className="name">{person.name}</div>
                            </a>
                        </div>)
                    )}
                </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {

};
const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Content);