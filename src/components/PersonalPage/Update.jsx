import React, { Component } from 'react';
import LeftMenu from '../common/LeftMenu';
import Header from '../common/Header';
import '../../styles/update.css';

class UpdateProfile extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="content">
                    <LeftMenu />
                    <div className="options">
                        <h3>Common</h3>
                        <div className="attribute">
                            <label htmlFor="name">Name: </label>
                            <input id="name" type="text" />
                        </div>
                        <div className="attribute">
                            <label htmlFor="last_name">Last name: </label>
                            <input id="last_name" type="text" />
                        </div>
                        <div className="attribute">
                            <label htmlFor="gender">Gender: </label>
                            <select id="gender" type="text">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="attribute">
                            <label htmlFor="birthday">Birthday: </label>
                            <input id="birthday" type="text" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateProfile;
