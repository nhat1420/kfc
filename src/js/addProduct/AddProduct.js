import React, { Component } from 'react'

export default class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            quantity: '',
            price: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClickAddProduct = this.handleClickAddProduct.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    handleClickAddProduct() {
        this.setState(prevState => {
            let { name, quantity, price } = prevState
            let isAddSuccess = false
            quantity = parseInt(quantity)
            price = parseInt(price)

            if (name && !isNaN(quantity) && !isNaN(price)) {
                this.props.handleClickAddProduct({ id: new Date().getTime().toString(), name, quantity, price })
                isAddSuccess = true
            }

            if (isAddSuccess) {
                window.alert("OK thêm thành công :v")
                return {
                    name: '',
                    quantity: '',
                    price: '',
                }
            } else {
                let result = window.confirm("Nhập đúng, đủ thông tin vào bạn ơi =))") ? true : false
                if (!result) {
                    while (result === false) {
                        if (window.confirm("Ấn Hủy làm gì, ấn OK đi.")) {
                            result = true
                        }
                    }
                }
            }
        })
    }

    render() {
        const { name, quantity, price } = this.state
        return (
            <>
                <label htmlFor="" className="key-product">Tên đồ ăn
                    <input className="input-item" type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
                <label htmlFor="" className="key-product">Số lượng
                    <input className="input-item" type="text" name="quantity" value={quantity} onChange={this.handleChange} />
                </label>
                <label htmlFor="" className="key-product">Giá
                    <input className="input-item" type="text" name="price" value={price} onChange={this.handleChange} />
                </label>
                <button className="btn-add" onClick={this.handleClickAddProduct}>Add Food</button>
            </>
        )
    }
}
