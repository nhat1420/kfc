import React, { Component } from 'react'

export default class Payment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subTotal: 0,
            shipping: 0,
            total: 0
        }
        this.getProductFromList = this.getProductFromList.bind(this)
        this.clearPrice = this.clearPrice.bind(this)
    }

    getProductFromList(products) {
        let subTotal = products.reduce((sum, product) => {
            const totalPriceOfOne = product.quantity * product.price
            return sum + totalPriceOfOne
        }, 0)
        let shipping = 3
        let total = subTotal + shipping

        this.setState({ subTotal, shipping, total })
        this.props.getTotal(total)
    }

    clearPrice() {
        this.setState({ subTotal: 0, shipping: 0, total: 0 })
    }

    render() {
        const { subTotal, shipping, total } = this.state
        return (
            <div>
                <div className="payment-info payment-subtotal">
                    <span className="payment-label">SubTotal</span>
                    <span className="payment-price">{subTotal}$</span>
                </div>
                <div className="payment-info payment-shipping">
                    <span className="payment-label">Shipping</span>
                    <span className="payment-price">{shipping}$</span>
                </div>
                <div className="payment-info payment-total">
                    <span className="payment-label">Total</span>
                    <span className="payment-price">{total}$</span>
                </div>
            </div>
        )
    }
}
