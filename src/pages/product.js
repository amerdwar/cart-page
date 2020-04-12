import React, { Component } from "react";
import { getProductById } from '../api/products'
import { addToCart } from '../store/actions/actions'
import { connect } from "react-redux"
import classNames from 'classnames'
class Product extends Component {
    state = {
        loading: true,
        product: {},
        quantity: 0
    };
    changeQuantity = (event) => {
        if(!!!event.target.value)
            return;
        let num = parseInt(event.target.value);
        if (num > 20) {
            alert("Max number is 20");
            //TODO add modal and delete alert

            this.setState({
                quantity: 20
            });

        } else {

            this.setState({
                quantity: num
            });
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;

        getProductById(id).then(producti =>
            setTimeout(() =>
                this.setState({ product: producti, loading: false }), 1000

            ));

    };
    addToCart = (product) => {
        const q = this.state.quantity;
        this.setState({ quantity: 0 });
        return this.props.addToCart(product, q);
    };
    render() {
        if (this.state.loading)
            return (<div className="text-center"><br /><br /><div className="text-center  spinner-border  text-primary" style={{ width: "10rem", height: "10rem" }}
                role="status">
                <span className="sr-only">Loading...</span>
            </div></div>);


        const product = this.state.product;

        let btnAddtoCartClasses =
            classNames('btn btn-primary btn-block', { 'disabled': this.state.quantity === 0 });

        return (
   
        <div className="row">
        
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img alt="..." src={product.image} width={'100%'} ></img>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h1>{product.name}</h1>
                <p>Price: {product.price}$</p>
                <p> {product.description}</p>

                <input type="number" max="20" min="0" value={this.state.quantity} onChange={this.changeQuantity} />
                <br />
                <br />
                <p> Total: {this.state.quantity * product.price}</p>
                <button disabled={(this.state.quantity === 0)} className={btnAddtoCartClasses} onClick={() => this.addToCart(product)} >
                    Add to cart{" "}
                    <span className="badge badge-danger" >{this.props.totalQuantity}</span>
                </button>
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        totalQuantity: getTotalQuantity(state, ownProps.match.params.id)
    }
}
function getTotalQuantity(state, id) {
    let item = state.cart.find(item => item.product.id === id);
    if (item) {

        return item.quantity;
    } else {
        return "0";
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);