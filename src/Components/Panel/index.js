import React, { Component } from 'react';
import './index.css';
import Nav from '../Nav';

class Panel extends Component {

    render() {
        return (
            <div className="panel">
                <Nav />
            </div>
        );
    }
}

export default Panel;
