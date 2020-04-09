import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Home from './pages/home'
import Products from './pages/products'
import Cart from './pages/cart'
import Product from './pages/product'
import CartIcon from './components/cartIcon'
import store from './store/store'
import { Provider} from 'react-redux'

function App() {
  return (
    <Router>
    <div className="container">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Store</Link>
  <button className="navbar-toggler" type="button" 
  data-toggle="collapse" data-target="#navbarTogglerDemo02" 
  aria-controls="navbarTogglerDemo02" aria-expanded="false"
   aria-label="Toggle navigation">
     
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart">Cart</Link>
      </li>
 
    </ul>
  
  </div>
  
  <CartIcon/>
</nav>
<Route  path='/' component={Home} exact/>
<Route  path='/products' component={Products} exact />
<Route  path='/products/:id' component={Product} />
<Route  path='/cart' component={Cart} />


    </div>
    </Router>
  );
}

function AppWithStore(){

  return (
    <Provider store = {store}>
      <App/>
      </Provider>
  ); 

}

export default AppWithStore;
