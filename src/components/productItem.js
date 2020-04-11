import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ProductItem extends Component {
    render() {
        return (

            <div className="card" >
                <img src={this.props.product.image} className="card-img-top " alt="..." />
                <div className="card-body">
        <p className="h5 card-title">{this.props.product.name}</p>
        <p className="card-text">{this.props.product.price} $</p>
                    <Link to={"/products/"+this.props.product.id} className="btn btn-primary">Details</Link>
                </div>
            </div>
        );
    }
}