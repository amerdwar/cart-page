import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Products from './pages/products'
import Cart from './pages/cart'
import Product from './pages/product'
import CartIcon from './components/cartIcon'
import store from './store/store'
import { Provider } from 'react-redux'

import { Nav, Navbar } from 'react-bootstrap'
class App extends Component {
  render() {

    return (
      <Router>
        <div className="container">
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="/"><h3>Home</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/products"><h4>products</h4></Nav.Link>
                <Nav.Link href="/cart"><h4>cart</h4></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/cart"> <CartIcon /> </Nav.Link>
              </Nav>

            </Navbar.Collapse>

          </Navbar>
          <Route path='/' component={Home} exact />
          <Route path='/products' component={Products} exact />
          <Route path='/products/:id' component={Product} />
          <Route path='/cart' component={Cart} />


        </div>
      </Router>
    );
  }
}

function AppWithStore() {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );

}

export default AppWithStore;
