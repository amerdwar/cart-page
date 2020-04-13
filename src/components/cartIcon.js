import React, { Component } from "react";
import './cartIcon.css'
import { connect } from "react-redux"

export class CartIcon extends Component {
    render() {
        return (<div id="cart-icon">


            <div className="row" >
                <div className="col-1" />
                <div className="col-11">
                <span className="badge badge-danger">{this.props.totalQuantity}</span>
                </div>
            </div> 
            <div className="row">
                <i className="fa fa-shopping-cart" > </i>
            </div>

        </div>);
    }
}
const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0)
    };
};
export default connect(mapStateToProps)(CartIcon);