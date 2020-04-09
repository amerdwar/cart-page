import React, { Component } from "react";
import ProductItem from '../components/productItem'
import  {getAll}  from '../api/products'
export default class Products extends Component {

    state = {
        loading:true,
        products: []
    };

    componentDidMount() {
        getAll().then(data => {
setTimeout(()=>
            this.setState({
                loading:false,
                products: data
            }),1000);
        });
    }
    render() {
        if (this.state.loading)
        return 'loading ...';

        return <div>
            <h1>Products</h1>
            <div className="row">
                {this.state.products.map((product, index) =>
                    <div className="col-4" key={index}>
                        <ProductItem product={product} />
                    </div>)
                }





            </div>
        </div>;
    }
}