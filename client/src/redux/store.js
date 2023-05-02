import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderReducer } from './reducers/orderReducers';

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        order: orderReducer
    }
});