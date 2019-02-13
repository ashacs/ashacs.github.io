import React, { Component } from 'react';
import './index.scss';
import Nav from '../Nav';
import Avatar from '../Avatar';

class Panel extends Component {

    render() {
        return (
            <div className="panel">
                <Avatar />
                <Nav />
            </div>
        );
    }
}

export default Panel;
