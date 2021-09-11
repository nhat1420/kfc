import React, { Component } from 'react'
import ItemProduct from './ItemProduct'

export default class ListProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

        this.handleRemove = this.handleRemove.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)
        this.handleIncrease = this.handleIncrease.bind(this)
        this.getProductFromAdd = this.getProductFromAdd.bind(this)
        this.clearProducts = this.clearProducts.bind(this)
    }

    handleRemove(id) {
        this.setState(prevState => {
            const filterProducts = prevState.data.filter(product => product.id !== id)
            return {
                data: filterProducts
            }
        })
        this.setState(prevState => {
            this.props.handleChange(prevState.data)
        })
    }

    handleDecrease(id) {
        this.setState(prevState => {
            const products = prevState.data.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product
            })
            return {
                data: products
            }
        })
        this.setState(prevState => {
            this.props.handleChange(prevState.data)
        })
    }
    handleIncrease(id) {
        this.setState(prevState => {
            const products = prevState.data.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product
            })
            return {
                data: products
            }
        })
        this.setState(prevState => {
            this.props.handleChange(prevState.data)
        })
    }

    getProductFromAdd(product) {
        this.setState(prevState => {
            const newState = [...prevState.data, product]
            return {
                data: newState
            }
        })
        this.setState(prevState => {
            this.props.getProducts(prevState.data)
        })
    }

    clearProducts(products) {
        this.setState({ data: products })
        // this.setState(prevState => {
        //     this.props.clearProducts(prevState.data)
        // })
    }

    render() {
        const products = this.state.data
        const listProduct = products.map(product =>
            <ItemProduct
                key={product.id}
                {...product}
                handleRemove={this.handleRemove}
                handleDecrease={this.handleDecrease}
                handleIncrease={this.handleIncrease}
            />)

        return (
            <>
                {listProduct}
            </>
        )
    }
}
