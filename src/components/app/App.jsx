import React, {Component} from 'react';
import Header from './Header';
import LeftMenu from './LeftMenu';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="content">
                    <LeftMenu/>
                </div>
            </div>
        );
    }
}

export default App;
