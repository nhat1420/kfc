import React, { Component } from 'react'
import ListProduct from './ListProduct'
import Payment from './Payment'
import CheckOut from './CheckOut'
export default class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            total: 0,
        }
        this.handleChange = this.handleChange.bind(this)
        this.getProducts = this.getProducts.bind(this)
        this.checkOut = this.checkOut.bind(this)
        this.getTotal = this.getTotal.bind(this)
        this.getProduct = React.createRef()
        this.getPrice = React.createRef()
    }

    handleChange(products) {
        this.getPrice.current.getProductFromList(products)
    }

    getProductFromAdd = (product) => {
        this.getProduct.current.getProductFromAdd(product)
    }

    getProducts(products) {
        this.getPrice.current.getProductFromList(products)
        this.setState({ data: products })
    }

    getTotal(total) {
        this.setState({ total: total })
    }

    checkOut() {
        if (this.state.data.length < 1) {
            let result = window.confirm("Thêm sản phẩm đi bro =)) Ấn??? ") ? true : false
            if (!result) {
                while (result === false) {
                    if (window.confirm("Ấn ok đi ???")) {
                        result = true
                    }
                }
            }
        } else {
            window.alert("Vâng, đặt hàng thành công.")
            const output = `Vui lòng thanh toán ${this.state.total}$. Đừng có bùng nhé bro... OK!!!`
            let result = window.confirm(output) ? true : false
            if (!result) {
                while (result === false) {
                    if (window.confirm("WTF ấn OK thanh toán đi???")) {
                        result = true
                    }
                }
            }
            if (result) {
                this.setState({ data: [] })
                this.setState(prevState => {
                    this.getProduct.current.clearProducts(prevState.data)
                    this.getPrice.current.clearPrice()
                })
            }
        }
    }

    render() {
        const title = "Your bill from KFC <3"
        return (
            <>
                <div className="body textBold">
                    <p className="body__title">{title}</p>
                    <ul className="list-product">
                        <ListProduct
                            handleChange={this.handleChange}
                            ref={this.getProduct}
                            getProducts={this.getProducts}
                        />
                    </ul>
                    <div className="payment">
                        <Payment
                            ref={this.getPrice}
                            getTotal={this.getTotal}
                        />
                        <CheckOut checkOut={this.checkOut} />
                    </div>
                </div>
            </>
        )
    }
}
