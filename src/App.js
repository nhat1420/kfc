import React, { Component } from 'react'
import Header from './js/header/Header'
import Body from './js/body/Body'
import AddProduct from './js/addProduct/AddProduct'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.handleClickAddProduct = this.handleClickAddProduct.bind(this)
        this.getProduct = React.createRef()
    }

    handleClickAddProduct(product) {
        this.getProduct.current.getProductFromAdd(product)
    }

    render() {
        return (
            <div id='app'>
                <div className="add-product">
                    <AddProduct handleClickAddProduct={this.handleClickAddProduct} />
                </div>
                <div id="bill">
                    <div className="main">
                        <Header />
                        <Body ref={this.getProduct} />
                    </div>
                </div>
            </div>
        )
    }
}
