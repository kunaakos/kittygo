import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cats">Cats</Link></li>
            </ul>
        )
    }
}

export default Nav