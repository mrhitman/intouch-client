import React, { Component } from 'react';
import Header from '../common/Header';
import Content from './Content';

class PersonalPage extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Content />
            </div>
        );
    }
}

export default PersonalPage;
