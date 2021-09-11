import React, { Component } from 'react'
export default class ItemProduct extends Component {
    constructor(props) {
        super(props)

        this.clickRemove = this.clickRemove.bind(this)
        this.clickDecrease = this.clickDecrease.bind(this)
        this.clickIncrease = this.clickIncrease.bind(this)
    }

    clickDecrease(id, quantity) {
        if (quantity > 1) {
            this.props.handleDecrease(id)
        }
    }

    clickIncrease(id) {
        this.props.handleIncrease(id)
    }

    clickRemove(id) {
        this.props.handleRemove(id)
    }

    render() {
        const { id, name, quantity, price } = this.props
        const totalPrice = quantity * price

        return (
            <li className="item-product">
                <span className="name-product">{name}</span>
                <div className="item-options">
                    <span className="btn btn-decrease" onClick={() => this.clickDecrease(id, quantity)}>-</span>
                    <span className="amount-product">{quantity}</span>
                    <span className="btn btn-increase" onClick={() => this.clickIncrease(id)}>+</span>
                    <span className="item-price">{totalPrice}$</span>
                    <span className="btn btn-remove" onClick={() => this.clickRemove(id)}>x</span>
                </div>
            </li>
        )
    }
}
