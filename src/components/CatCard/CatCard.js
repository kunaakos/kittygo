import React, { PureComponent } from 'react'

import './CatCard.css'

class CatCard extends PureComponent {
    render() {
        return (
            <div className="catcard">

                <div className="catcard-block name-block">
                    <p className="name"><strong>{this.props.data.name}</strong></p>
                </div>

                <div className="catcard-block data-block">
                    <p><strong>{this.props.data.personality}</strong> personality</p>
                    <p><strong>{this.props.data.coatColor}</strong> coat</p>
                    <p><strong>{this.props.data.eyeColor}</strong> eyes</p>
                    <p><strong>{this.props.data.age}</strong> yrs. old, <strong>{this.props.data.weight}</strong>kg</p>
                </div>

            </div>
        )
    }
}

export default CatCard