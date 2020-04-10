import { createStore, compose, applyMiddleware,combineReducers } from 'redux'
import cartReducer from './reducers/index'
import thunk from "redux-thunk"
import throttle from 'lodash.throttle'
function loadStateFromLocalStorage() {
    try {
        const state = localStorage.getItem('cart');
        if (state !== null) {
            return JSON.parse(state);

        }
    } catch (e) {
        //ignore error 
    }
  
        return {
            cart:[]
        };
    
}

function saveToLocalStorage(state) {
    console.log('save state');
    localStorage.setItem('cart', JSON.stringify(state))
}

const initialState = loadStateFromLocalStorage();


const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const applyThunk = applyMiddleware(thunk);
const appReducer =  combineReducers({
    cart:cartReducer
});



const store = createStore(appReducer, initialState, compose(applyThunk, enableReduxDevTools));

//save state every 2 s

    store.subscribe(throttle(() => 
saveToLocalStorage(store.getState()),2000));
export default store;