import React from 'react'
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Productcontainer from './Productcontainer';
import {fetchproducts} from '../redux/action/ProductAction';
function Productlisting() {
  const products=useSelector((state)=>state);
  const dispatch=useDispatch();
  // console.log(products);
  // const fetchproducts=async()=>{
  //   const response=await axios
  //   .get('https://fakestoreapi.com/products')
  //   .catch((err)=>{
  //     console.log("Error in axios",err)
  //   })
  //   // console.log(response.data);
  //   dispatch(setproducts(response.data));
  // }
  useEffect(() => {
    dispatch(fetchproducts());
  }, [])
  console.log(products);
  return (
    <>
    <Productcontainer/>
    </>
  )
}

export default Productlisting;