import React, { Component } from 'react'

import './CheckboxFilter.css';

import CheckBox from '../Checkbox/CheckBox';

class CheckboxFilter extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(filterValueName, newValue) {
        this.props.setFilter({
            filterName: this.props.data.name,
            filterValueName: filterValueName,
            filterValue: newValue
        })
    }

    render() {

        let filterOptionList = this.props.data.options.keys.map(key => this.props.data.options.values[key])
            .map((option) => (
                <div
                    className="filteroption"
                    key={option.name}
                >
                    <CheckBox
                        name={option.name}
                        isChecked={option.selected}
                        update={this.handleChange}
                    />
                </div>
            ))

        return (
            <div className="checkboxfilter">
                <div className="filtername">{this.props.data.name}</div>
                {filterOptionList}
            </div>
        )
    }
}

export default CheckboxFilter