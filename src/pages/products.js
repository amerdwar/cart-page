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
        return (<div className="text-center"><br/><br/><div className="text-center  spinner-border  text-primary" style={{width: "10rem", height: "10rem"}} 
        role="status">
        <span className="sr-only">Loading...</span>
      </div></div>);

        return <div>
            <h1>Products</h1>
            <div className="row">
                {this.state.products.map((product, index) =>
                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                        <ProductItem product={product} />
                    </div>)
                }





            </div>
        </div>;
    }
}