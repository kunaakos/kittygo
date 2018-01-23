import React, { PureComponent } from 'react'

import './CheckboxFilter.css';

import CheckBox from '../Checkbox/CheckBox';

class CheckboxFilter extends PureComponent {

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

        let filterOptionList = Object.values(this.props.data.options)
            .map((option) => (
                <div
                    className="filteroption"
                    key={option.name}
                >
                    <CheckBox
                        data={option}
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