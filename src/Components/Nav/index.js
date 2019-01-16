import React, { Component } from 'react';
import './index.css';

class Nav extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <nav>
                <ul className="nav">
                    <li><a href="#">Who am I?</a></li>
                    <li><a href="#">What matters to me?</a></li>
                    <li><a href="#">What kind of work do I do?</a></li>
                </ul>
            </nav>
        );
    }

}

export default Nav;