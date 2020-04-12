import React, { Component } from "react";
import CartItem from '../components/cartItem'
import { Modal, Button } from 'react-bootstrap'
import { clearCart, placeOrder } from '../store/actions/actions'
import { connect } from "react-redux"
import classNames from 'classnames'
class Cart extends Component {
    state = {
        show: false,
confirm:''
    }
    handleClose = () => {
        this.setState({
            show: false

        });
    }
    handleOk = () => {
        this.setState(
            {
                show: false
            }
        );
    }

    placeOrderFun = () => {
        this.setState({
            show:true,
            confirm:'placeOrder'
        });
    }
    clearCartFun = () => {
        this.setState({
            show:true,
            confirm:'clearCart'
        });
    }

    render() {
        let btnPlaceOrderClasses =
            classNames('btn btn-primary btn-block', { 'disabled': !this.props.enableBtnPlaceOrder });
        let btnClearCartClasses =
            classNames('btn btn-danger btn-block', { 'disabled': !this.props.enableBtnClearCart });

        return <div>
            <h1>Cart</h1>
            <div className="row">

                {this.props.cartItems.map((item) =>
                    <div className="col-lg-4 col-md-6 col-sm-12" key={item.product.id}>
                        <CartItem item={item} />
                    </div>)
                }
            </div>
            <br />
            <h3>
                Total: {this.props.total}$
            </h3>

            <button disabled={!this.props.enableBtnPlaceOrder} className={btnPlaceOrderClasses} onClick={this.placeOrderFun}>Place order</button>
            <button disabled={!this.props.enableBtnClearCart} className={btnClearCartClasses} onClick={this.clearCartFun}>Clear cart</button>




            <Modal show={this.state.show?this.props.modalShow:this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
            <Modal.Body>{'Are you sure want to '+ (this.state.confirm=='clearCart'?'clear cart?':'place order ?')}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                         </Button>
                    <Button variant="primary" onClick={ (this.state.confirm=='clearCart'?this.props.clearCart :this.props.placeOrder )} >
                        Ok
                           </Button>
                </Modal.Footer>
            </Modal>

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
        enableBtnClearCart: enableBtn,
        modalShow:enableBtn
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         clearCart: () => dispatch(clearCart()),
//     };
// }

export default connect(mountStateToProps, { clearCart, placeOrder })(Cart);