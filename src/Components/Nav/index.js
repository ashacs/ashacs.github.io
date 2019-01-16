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
                <ul className="listBare navList">
                    <li className="padding-small navLink"><a href="#">Who am I?</a></li>
                    <li className="padding-small navLink"><a href="#">What do I do?</a></li>
                    <li className="padding-small navLink"><a href="#">What matters to me?</a></li>
                </ul>
            </nav>
        );
    }

}

export default Nav;