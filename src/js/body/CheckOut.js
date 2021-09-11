import React, { Component } from 'react'

export default class CheckOut extends Component {
    constructor(props) {
        super(props)

        this.checkOut = this.checkOut.bind(this)
    }

    checkOut() {
        this.props.checkOut()
    }

    render() {
        return (
            <>
                <div className="btn-checkout" onClick={this.checkOut}>Check out</div>
            </>
        )
    }
}
