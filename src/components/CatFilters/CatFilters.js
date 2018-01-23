import React, { Component } from 'react'
import { connect } from 'react-redux'

import CheckboxFilter from '../CheckboxFilter/CheckboxFilter';

import { setCatFilter } from '../../actions/index';

const mapStateToProps = state => {
    return {
        filters: state.catFilters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCatFilter: changedFilter => dispatch(setCatFilter(changedFilter))
    };
};

class CatFilters extends Component {

    render() {
        let filterList = Object.values(this.props.filters)
            .map((filter) => (
                <CheckboxFilter
                    data={filter}
                    key={filter.name}
                    setFilter={this.props.toggleCatFilter}
                />
            ))

        return (
            <div className="catfilters">
                {filterList}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatFilters)