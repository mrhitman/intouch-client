import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        const { status, name, quote } = this.props;
        return (
            <div className="profile">
                <div className="profileUser__status">{status ? 'Online' : 'Ofline'}</div>
                <div className="profileUser__name">{name}</div>
                <div className="profileUser__quote">{quote}</div>
                <div className="line" />
                <div className="profileUser__info">
                    <div>Birthday: </div>
                    <div>Hometown: </div>
                    <div>Relationship status: </div>
                    <div>Company: </div>
                    <div>Language: </div>
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
