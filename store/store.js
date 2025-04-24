'use client'
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productsSlice'
import { Provider } from "react-redux";


export const store = configureStore({
    reducer: {
        products: productsReducer,
    }
})


export function ReduxProvider({children}){
    return <Provider store={store}>{children}</Provider>
}