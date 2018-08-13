import React, { Component } from 'react';
import Header from '../Common/Header';
import LeftMenu from '../Common/LeftMenu';

class News extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div class="content">
                    <LeftMenu />
                </div>
            </div>
        );
    }
}

export default News;
