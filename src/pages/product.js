import React, { Component } from "react";
import { getProductById } from '../api/products'
import { addToCart } from '../store/actions/actions'
import { connect } from "react-redux"
class Product extends Component {
    state = {
        loading: true,
        product: {},
        quantity: 0
    };
    changeQuantity = (event) => {

        if (event.target.value > 20) {
            alert("Max number is 20");
            //TODO add modal and delete alert
            this.setState({
                quantity: 20
            });

        } else {
            this.setState({
                quantity: event.target.value
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
     
        return this.props.addToCart(product, this.state.quantity);
    };
    render() {
        if (this.state.loading)
            return 'loading ...';
        const product = this.state.product;
        return (<div className="row">
            <div className="col-6">
                <img src={product.image} width={'100%'} ></img>
            </div>
            <div className="col-6">
                <h1>{product.name}</h1>
                <p>Price: {product.price}$</p>
                <p> {product.description}</p>

                <input type="number" max="20" min="0" value={this.state.quantity} onChange={this.changeQuantity} />
                <br />
                <br />
                <p> Total: {this.state.quantity * product.price}</p>
                <button className="btn btn-primary" onClick={() => this.addToCart(product)} >Add to cart</button>
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
    };
}


    

export default connect(null, mapDispatchToProps)(Product);