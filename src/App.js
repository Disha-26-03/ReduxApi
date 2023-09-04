import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
0
import './App.css'
import axios from 'axios';
import {
  setProductData,
  setCurrentIndex,
  nextProduct,
  prevProduct,
} from './productSlice';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const currentIndex = useSelector((state) => state.product.currentIndex);


  const [BackwardDisabled, setBackwardDisabled] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products") 
      .then((response) => {
        dispatch(setProductData(response.data.products));
        setBackwardDisabled(false);
      })
      
  }, [dispatch]);

  const handleNextProduct = () => {
    dispatch(nextProduct());
    setBackwardDisabled(false)
  };

  const handlePrevProduct = () => {
    dispatch(prevProduct());
  };
   
  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={handlePrevProduct}  disabled={BackwardDisabled}>Backward</button>
      <img src={products[currentIndex].thumbnail} alt={`Image ${currentIndex}`} />
      
      <div>
      <h1>{products[currentIndex].title}</h1>
      <h2>{products[currentIndex].description}</h2>
     
      </div>
      <button onClick={handleNextProduct}>Forward</button>
     
    </div>
  );
};

export default App;

