import React, { Component } from 'react';
import './index.scss';
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
