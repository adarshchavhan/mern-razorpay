import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    cartItems: {
        cheeseBurger: {
            quantity:0,
            price: 299
        },
        vegCheeseBurger: {
            quantity:0,
            price: 499
        },
        burgerWithFries: {
            quantity:0,
            price: 599
        }
    },
    subTotal: 0,
    tax:0,
    shippingCharges: 0,
    totalPrice: 0,
    shippingInfo: {}
}

export const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('cheeseBurgerIncrement', (state) => {
            state.cartItems.cheeseBurger.quantity += 1;
        })
        .addCase('vegCheeseBurgerIncrement', (state) => {
            state.cartItems.vegCheeseBurger.quantity += 1;
        })
        .addCase('burgerWithFriesIncrement', (state) => {
            state.cartItems.burgerWithFries.quantity += 1;
        });

    builder
        .addCase('cheeseBurgerDecrement', (state) => {
            state.cartItems.cheeseBurger.quantity -= 1;
        })
        .addCase('vegCheeseBurgerDecrement', (state) => {
            state.cartItems.vegCheeseBurger.quantity -= 1;
        })
        .addCase('burgerWithFriesDecrement', (state) => {
            state.cartItems.burgerWithFries.quantity -= 1;
        });

    builder
        .addCase('calculatePrice', (state) => {
            state.subTotal = 
            state.cartItems.cheeseBurger.price *  state.cartItems.cheeseBurger.quantity +
            state.cartItems.vegCheeseBurger.price *  state.cartItems.vegCheeseBurger.quantity +
            state.cartItems.burgerWithFries.price *  state.cartItems.burgerWithFries.quantity;

            state.tax = Number(state.subTotal * 0.18).toFixed(2);
            state.shippingCharges = state.subTotal > 1000 ? 0 : 50;
            state.totalPrice = Number(Number(state.subTotal) + Number(state.tax) + Number(state.shippingCharges)).toFixed(2);
        })
        .addCase('addShippingInfo', (state, action) => {
            state.shippingInfo = action.payload
        })
        .addCase('emptyCart', (state)=> {
            state.cartItems = {
                cheeseBurger: {
                    quantity:0,
                    price: 299
                },
                vegCheeseBurger: {
                    quantity:0,
                    price: 499
                },
                burgerWithFries: {
                    quantity:0,
                    price: 599
                }
            };
            state.subTotal = 0;
            state.tax = 0;
            state.shippingCharges = 0;
            state.totalPrice = 0;
            state.shippingInfo = {};
        });
        
});