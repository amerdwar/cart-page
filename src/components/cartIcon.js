import React, { Component } from "react";
import './cartIcon.css'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"

export  class CartIcon extends Component {
    render(){
        return (<div id = "cart-icon"> 
        <Link to = "/cart">
            
            <div className="col-12">
            <span className="badge badge-danger">{this.props.totalQuantity}</span>
            </div> <div className="col-12">
            <i className="fa fa-shopping-cart" > </i>
            </div>
        </Link>
        </div>);
    }
}
const mapStateToProps = (state) =>{
return {
totalQuantity:state.cart.reduce((total,item)=>total + parseInt(item.quantity),0)
};
};
export default connect(mapStateToProps)(CartIcon);