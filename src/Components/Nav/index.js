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
                    <li className="padding-small"><a href="#">Who am I?</a></li>
                    <li className="padding-small"><a href="#">What matters to me?</a></li>
                    <li className="padding-small"><a href="#">What kind of work do I do?</a></li>
                </ul>
            </nav>
        );
    }

}

export default Nav;