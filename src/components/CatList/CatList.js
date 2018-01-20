import React, { Component } from 'react'
import { connect } from 'react-redux'

import CatCard from '../CatCard/CatCard'

const mapStateToProps = state => {
    return {
        cats: state.displayedCats
    }
}

class CatList extends Component {
    render() {
        return (
            <div className="catlist">
                {this.props.cats.map(cat => (
                    <CatCard
                        data={cat}
                        key={cat.UID}
                    />
                ))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(CatList)