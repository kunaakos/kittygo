import React, { PureComponent } from 'react'

class Checkbox extends PureComponent {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            isChecked: props.isChecked
        }
    }

    handleChange() {
        this.setState(({ isChecked }) => ({ isChecked: !isChecked }))
        this.props.update(this.props.name, !this.state.isChecked)
    }

    componentWillReceiveProps(nextProps) {
        this.setState(() => ({ isChecked: nextProps.isChecked }))
    }

    render() {
        return (
            <span>
                <input
                    type="checkbox"
                    id={this.props.name}
                    checked={this.state.isChecked}
                    onChange={this.handleChange}
                />
                <label htmlFor={this.props.name}>
                    {this.props.name}
                </label>
            </span>
        )
    }
}

export default Checkbox