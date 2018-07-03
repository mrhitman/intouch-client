import React, { Component } from 'react';
import { connect } from 'react-redux';

const toggleCss = {
    margin: '8px',
    textAlign: 'center',
    color: '#4c77a4',
    fontSize: '0.8em',
    fontWeight: 'bold'
};

class Profile extends Component {
    state = {
        short: true
    }

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
        return (
            <div>
                <div className="profileUser__info">
                    <div className="infoTag">Your life priorities: </div>
                    <div className="infoData">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem amet, porro molestias sint ex blanditiis! Pariatur iusto, qui officiis nam laudantium, omnis vero alias facere ex sed at eligendi vitae.
                    </div>
                    <div className="infoTag">Your hobbies: </div>
                    <div className="infoData">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem amet, porro molestias sint ex blanditiis! Pariatur iusto, qui officiis nam laudantium, omnis vero alias facere ex sed at eligendi vitae.
                    </div>
                </div>
                <div onClick={this.toggleInfo} style={toggleCss}>Show less</div>
            </div>
        )
    }

    toggleInfo = () => {
        this.setState({
            short: !this.state.short
        });
    }
}

const mapStateToProps = (state, ownProps) => {
    return state.profile;
};
const mapDispatchToState = (dispatch, ownProps) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToState,
)(Profile);
