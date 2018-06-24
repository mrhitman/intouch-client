import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        const { status, name, quote, info } = this.props;
        return (
            <div className="profile">
                <div className="profileUser__status">{status ? 'Online' : 'Offline'}</div>
                <div className="profileUser__name">{name}</div>
                <div className="profileUser__quote">{quote}</div>
                <div className="line" />
                <div className="profileUser__info">
                    <div className="infoTag">Birthday: </div>
                    <div className="infoData">{info.birthday}</div>
                    <div className="infoTag">Hometown: </div>
                    <div className="infoData">{info.town}</div>
                    <div className="infoTag">Relationship status: </div>
                    <div className="infoData">{info.relationship}</div>
                    <div className="infoTag">Company: </div>
                    <div className="infoData">{info.company}</div>
                    <div className="infoTag">Language: </div>
                    <div className="infoData">{info.languages.join()}</div>
                </div>
                <div className="line" />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => state.profile;
const mapDispatchToState = (dispatch, ownProps) => {

};
export default connect(mapStateToProps, mapDispatchToState)(Profile);
