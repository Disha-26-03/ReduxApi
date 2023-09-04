import { createSlice } from '@reduxjs/toolkit'
// import {useState} from 'react' 
// import axios from 'axios'
const initialState = {
    products: [], 
    currentIndex: 0, 
  };
export const productSlice = createSlice({
    name: 'productexample',
    initialState,
    reducers: {
      setProductData: (state, action) => {
        state.products = action.payload;
      },
      setCurrentIndex: (state, action) => {
        state.currentIndex = action.payload;
      },
      nextProduct: (state) => {
        state.currentIndex =
          (state.currentIndex + 1) % state.products.length; 
      },
      prevProduct: (state) => {
        state.currentIndex =
          (state.currentIndex - 1 + state.products.length) %
          state.products.length;
      },
    },
})

export const {setProductData, setCurrentIndex, nextProduct, prevProduct} = productSlice.actions;

const productreducer = productSlice.reducer
export  default productreducer