import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer({}, (builder) => {
    builder
        .addCase('createOrderRequest', (state)=> {
            state.loading = true;
        })
        .addCase('paymentVerificationRequest', (state)=> {
            state.loading = true;
        })
    
    builder
        .addCase('createOrderSuccess', (state, action)=> {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase('paymentVerificationSuccess', (state, action)=> {
            state.loading = false;
            state.message = action.payload;
        })

    builder
        .addCase('createOrderFailure', (state, action)=> {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase('paymentVerificationFailure', (state, action)=> {
            state.loading = false;
            state.error = action.payload;
        })
});