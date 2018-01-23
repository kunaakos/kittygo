import React, { Component } from 'react'

import './Cats.css'

import CatList from '../CatList/CatList';
import CatFilters from '../CatFilters/CatFilters';

class Cats extends Component {
    render() {
        return (
            <div className="cats">
                <div className="cats-wrapper catfilters-wrapper">
                    <CatFilters />
                </div>
                <div className="cats-wrapper catlist-wrapper">
                    <CatList />
                </div>
            </div>
        )
    }
}

export default Cats