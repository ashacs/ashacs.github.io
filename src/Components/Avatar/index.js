import React, { Component } from 'react';
import './index.scss';

class Avatar extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <img class="rounded" src="/resources/avatar.jpg" alt="profile avatar" height="200" width="200"/>
        );
    }

};

export default Avatar;