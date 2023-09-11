import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
  const [Backwarddisabled, setBackwarddisabled] = useState(true);
const[Loading,setLoading]=useState(true)
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products") 
      .then((response) => {
        console.log(response.data)
        dispatch(setProductData(response.data));
        setLoading(false)
      })
      
  }, [dispatch]);

  const handleNextProduct = () => {
    dispatch(nextProduct());
    setBackwarddisabled(false)
    setLoading(true)
  };

  const handlePrevProduct = () => {
    if(!Backwarddisabled){
    dispatch(prevProduct());
    }
  };
 
  if (!products[currentIndex] ||  products.length === 0) {
    return <div>Loading...</div>

  }
  return (
    <div className='product'>
      <div className='one'>
     <ArrowBackIosIcon onClick={handlePrevProduct}disabled={Backwarddisabled} Backward/>
      </div>
      <div className='three'>
      <img src={products[currentIndex].image} alt={"dummy image"}/>
      <div>
      <div></div>
       <div> 
      <h2>{products[currentIndex].title}</h2>
      <h4>{products[currentIndex].description}</h4>
      <h4>{ products[currentIndex].price}</h4>
      </div> 


      </div>
  
      </div>
      <div className='two'>
     <ArrowForwardIosIcon onClick={handleNextProduct}Forward/>
      </div>
    </div>
  );
};

export default App;

