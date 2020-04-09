import React, { Component } from "react";
import CartItem from '../components/cartItem'
import { getAll } from '../api/products'
import { clearCart,placeOrder } from '../store/actions/actions'
import { connect } from "react-redux"
import  classNames   from 'classnames'
class Cart extends Component {


    render() {
        let btnPlaceOrderClasses =
        classNames ('btn btn-primary btn-block',{'disabled': !this.props.enableBtnPlaceOrder });
        let btnClearCartClasses =
        classNames ('btn btn-danger btn-block',{'disabled': !this.props.enableBtnClearCart });

    return<div>
            <h1>Cart</h1>
    <div className="row">

        {this.props.cartItems.map((item) =>
            <div className="col-3" key={item.product.id}>
                <CartItem item={item} />
            </div>)
        }
    </div>
    <br />
    <h3>
        Total: {this.props.total}$
            </h3>

    <button disabled={!this.props.enableBtnPlaceOrder} className={btnPlaceOrderClasses} onClick={this.props.placeOrder}>Place order</button>
    <button disabled={!this.props.enableBtnClearCart} className={btnClearCartClasses} onClick={this.props.clearCart}>Clear cart</button>
        </div >;
    }
}
const mountStateToProps = (state) => {
    var enableBtn = false;
 
    if (typeof (state.cart) != undefined && state.cart.length > 0)
        enableBtn = true;

    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
        enableBtnPlaceOrder: enableBtn,
        enableBtnClearCart:enableBtn
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         clearCart: () => dispatch(clearCart()),
//     };
// }

export default connect(mountStateToProps, {clearCart,placeOrder})(Cart);