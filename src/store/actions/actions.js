import { ADD_TO_CART, REMOVE_FROME_CART, CLEAR_CART ,PLACE_ORDER} from './types'
import {placeOrder as placeOrderApi}  from '../../api/products'
export function addToCart(product, quantity) {
  return {
    type: ADD_TO_CART,
    product,
    quantity
  }

}


function createPlaceOrder(res) {
  return {
    type: PLACE_ORDER,
    result:res
  }
}

//use thunk for placeOrder ,call api and then dispatch (async use case)
export function placeOrder() {
  return (
    (dispatch) => {
      placeOrderApi().then(res=>
  dispatch(createPlaceOrder(res))

 );
    })

}

//test thunk  (action creation usecase)
export function clearCart() {
  return dispatch=>dispatch({type:CLEAR_CART});
}



export function removeFromCart(id) {

  return {
    type: REMOVE_FROME_CART,
    id
  };

}