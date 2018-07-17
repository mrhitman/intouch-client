import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions, baseUri } from '../../constats';
import axios from 'axios';

const toggleCss = {
    margin: '8px',
    textAlign: 'center',
    color: '#4c77a4',
    fontSize: '0.8em',
    fontWeight: 'bold',
    cursor: 'pointer'
};

class Profile extends Component {
    state = {
        short: true
    }

    UNSAFE_componentWillMount() {
        const { id, token } = this.props;
        axios.get(`${baseUri}/user/get-profile/${id}`, {}, {
            headers: { Authorization: `${token}` }
        })
        .then(this.getProfile);
    }

    render() {
        const { profile, status } = this.props;
        return (
            <div className="profile">
                <div className="profileUser__status">{status ? 'Online' : 'Offline'}</div>
                <div className="profileUser__name">{profile.name}</div>
                <div className="profileUser__quote">{profile.quote}</div>
                <div className="line" />
                <div className="profileUser__info">
                    <div className="infoTag">Birthday: </div>
                    <div className="infoData">{profile.birthday}</div>
                    <div className="infoTag">Hometown: </div>
                    <div className="infoData">{profile.town}</div>
                    <div className="infoTag">Relationship status: </div>
                    <div className="infoData">{profile.relationships}</div>
                    <div className="infoTag">Company: </div>
                    <div className="infoData">{profile.company}</div>
                    <div className="infoTag">Language: </div>
                    <div className="infoData">{profile.languages}</div>
                </div>
                {this.state.short ? this.renderShortInfo() : this.renderMoreInfo() }
                <div className="line" />
            </div>
        );
    }

    renderShortInfo() {
        return (
            <div>
                <div onClick={this.toggleInfo} style={toggleCss}>Show more</div>
            </div>
        );
    }

    renderMoreInfo() {
        const { profile } = this.props;
        return (
            <div>
                <div onClick={this.toggleInfo} style={toggleCss}>Show less</div>
                <div className="profileUser__info">
                    <div className="infoTag">Your life priorities: </div>
                    <div className="infoData">{ profile.priorities }</div>
                    <div className="infoTag">Your hobbies: </div>
                    <div className="infoData">{ profile.hobbies }</div>
                </div>
            </div>
        )
    }

    toggleInfo = () => {
        this.setState(({ short }) => ({ short: !short}));
    }
}

const mapStateToProps = state => state.user;
const mapDispatchToState = dispatch => ({
    getProfile: payload => {
        dispatch({ type: Actions.getProfile, payload });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToState,
)(Profile);
