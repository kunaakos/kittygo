import React, { Component } from 'react'

class Checkbox extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            isChecked: props.data.selected
        }
    }

    handleChange() {
        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ))

        this.props.update(this.props.data.name, !this.state.isChecked)
    }

    render() {
        return (
            <span>
                <input
                    type="checkbox"
                    id={this.props.data.name}
                    checked={this.state.isChecked}
                    onChange={this.handleChange}
                />
                <label htmlFor={this.props.data.name}>
                    {this.props.data.name}
                </label>
            </span>
        )
    }
}

export default Checkbox