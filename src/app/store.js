// Import createStore and combineReducers here.
import {createStore, combineReducers} from 'redux'

import { inventoryReducer } from '../features/inventory/inventorySlice'
import { cartReducer } from '../features/cart/cartSlice'
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice'
// Import the slice reducers here.
export const store =createStore(combineReducers({ inventory:inventoryReducer, cart:cartReducer, currencyFilter: currencyFilterReducer}));


// Create and export the store here.
