import { configureStore } from "@reduxjs/toolkit";
import productreducer from './productSlice'
  const store=configureStore({
    reducer:{
    product: productreducer,
    }
})
export default store