import React, { Component } from 'react';
import Header from '../common/Header';
import Content from './Content';

class PersonalPage extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="app">
                <Header />
                <Content user_id={match.params.id} />
            </div>
        );
    }
}

export default PersonalPage;
