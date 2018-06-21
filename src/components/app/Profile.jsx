import React, {Component} from "react";
import * as Chance from 'chance';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profileUser__status">Online</div>
                <div className="profileUser__name">{new Chance().name()}</div>
                <div className="profileUser__quote">{new Chance().sentence()}</div>
                <div className="line"></div>
                <div>Birthday: </div>
                <div>Hometown: </div>
                <div>Relationship status: </div>
                <div>Company: </div>
                <div>Language: </div>
                <div className="line"></div>
            </div>
        );
    }
}

export default Profile;