import { ADD_TO_CART, REMOVE_FROME_CART, CLEAR_CART,PLACE_ORDER } from "../actions/types";


export default function cartReducer(state, action) {

    switch (action.type) {
        case ADD_TO_CART: {
            return addToCard(state, action);
        }
        case REMOVE_FROME_CART: {
            return removeFromCart(state, action);
        }
        case PLACE_ORDER: {
            return placeOrder(state, action);
        }
        case CLEAR_CART: {
            return clearCart(state, action);
        }
    
    

        default:
            if (state===undefined)
            return [];
            else
            return state;
    }

}

function addToCard(state, action) {
    //if the product is in the cart so increese the quantity else add it 
    let newState = [...state];
    let item = newState.find(item => item.product.id === action.product.id);
    if (item) {
        item.quantity = parseInt(action.quantity) + parseInt(item.quantity);
    return newState;
    } else {
        return  [
                ...state,
                {
                    product: action.product,
                    quantity: action.quantity
                }
                ];
        
    }

}

function removeFromCart(state, action) {
    if (!window.confirm("Are yous sure want to delete this item."))
    return state;

    let newState = [...state];
    let index = newState.findIndex(item => item.product.id === action.id);
    if (index > -1)
        newState.splice(index, 1)
    return newState;
}

function placeOrder(state, action) {
    //alert(action.result.message);
    if (action.result.code === 200)
        return [];
    else

     return state;
}

function clearCart(state, action) {

        return [];
 
}
