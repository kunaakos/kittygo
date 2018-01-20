import React, { Component } from 'react'

import './Cats.css'

import CatList from '../CatList/CatList';

class Cats extends Component {
    render() {
        return (
            <div className="catlist-wrapper">
                <CatList />
            </div>
        )
    }
}

export default Cats