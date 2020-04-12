import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import { getAll } from '../api/products';
import {Link} from 'react-router-dom';
export default class Home extends Component {
  state = {
    loading: true,
    products: []
  };
  componentDidMount() {
    getAll().then(data => {
      setTimeout(() =>
        this.setState({
          loading: false,
          products: data
        }), 1000);
    });
  }




  render() {
    if (this.state.loading)
      return (<div className="text-center"><br /><br /><div className="text-center  spinner-border  text-primary" style={{ width: "10rem", height: "10rem" }}
        role="status">
        <span className="sr-only">Loading...</span>
      </div></div>);

let nextIcon =  <span aria-hidden="true" className="fa fa-chevron-circle-right blue-style" />;
let prevIcon =  <span aria-hidden="true" className="fa fa-chevron-circle-left blue-style" />;
    return (<div className="row align-items-center">
      <div className="col">
      <br/>
      <br/>
      <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>

        {this.state.products.map((product, index) =>
          
          <Carousel.Item key={index}>
          <Link to={"/products/"+product.id}>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.name}
            />
            <Carousel.Caption >
            <div style={{ lineHeight:"inherit",minWidth:"100px",minHeight:"70px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"norap"}}>
              <h3>{product.name}</h3>
          
              <p>{product.description}</p>
              </div>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

        )
        }

      </Carousel></div></div>
    );
  }
}
