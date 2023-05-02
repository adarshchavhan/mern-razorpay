import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
    builder
        .addCase('loadUserRequest', (state)=>{
            state.loading = true;
        })
        .addCase('logoutRequest', (state)=>{
            state.loading = true;
        })
    
    builder
        .addCase('loadUserSuccess', (state, action) => {
            state.loading = false;
            state.isAuth = true;
            state.user = action.payload;
        })
        .addCase('logoutSuccess', (state, action) => {
            state.loading = false;
            state.isAuth = false;
            state.user = null;
            state.message = action.payload;
        })

    builder
        .addCase('loadUserFailure', (state, action) => {
            state.loading = false;
            state.isAuth = false;
            state.error = action.payload;
        })
        .addCase('logoutFailure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    
    builder
        .addCase('clearError', (state)=>{
            state.loading = false;
            state.error = null;
        })
        .addCase('clearMessage', (state)=> {
            state.loading = false;
            state.message = null;
        })
});