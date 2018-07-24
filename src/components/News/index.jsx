import React, { Component } from 'react';
import Header from '../common/Header';
import LeftMenu from '../common/LeftMenu';

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
