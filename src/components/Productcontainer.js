import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Productrender from './Productmap';
function Productcontainer() {
  const products=useSelector((state)=>state.allproducts.products);
  return (
    <>
    <Grid container>
    {products.map((product)=>{
      const {id,image,title,price,category}=product;
       return (<Grid item xs={3} key={id}>
        <Productrender id={id} image={image} title={title} price={price} category={category}/>
       </Grid>
       )
    })
    }
    </Grid>
    </>
  )
}

export default Productcontainer;