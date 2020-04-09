import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { removeFromCart } from '../store/actions/actions'
import { connect } from "react-redux"

 class CartItem extends Component {
    removeFromCart=()=>{
        
    this.props.removeFromCart(this.props.item.product.id);
    }
    render() {
        return (

            <div className="card" >
                <img src={this.props.item.product.image} className="card-img-top " alt="..." />
                <div className="card-body">
        <h5 className="card-title">{this.props.item.product.name}</h5>
        <p className="card-text">{this.props.item.product.price} $</p>
        <br/>
        Quantity: {this.props.item.quantity}
        <br/>
        Total: {this.props.item.product.price*this.props.item.quantity}$
        <br/>
        <br/>
                    <Link to="#" className="btn btn-danger" onClick={this.removeFromCart}>
                        <i className='fa fa-trash'></i> Delete</Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
}


    

export default connect(null, mapDispatchToProps)(CartItem);