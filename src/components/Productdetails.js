import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { removeselectedproducts,fetchdetails } from '../redux/action/ProductAction';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Productdetails() {
  const {productid}=useParams();
  // console.log(productid);
  const product=useSelector((state)=>state.product);
  const {image,title,price,category,description}=product;
  const dispatch=useDispatch();
  // const fetchdetails=async()=>{
  //   const response=await axios
  //   .get(`https://fakestoreapi.com/products/${productid}`)
  //   .catch((err)=>{
  //     console.log("Error in productdetails page",err)
  //   })
  //   console.log(response.data);
  //   dispatch(selectedproducts(response.data));
  // }
  useEffect(() => {
    if(productid && productid!==""){
    dispatch(fetchdetails(productid));
    }
    //This is required as we can remove the previous loaded component
    return ()=>{
      dispatch(removeselectedproducts());
    }
  }, [productid])
  return (
   <>
    <Card sx={{width:'20vw'}}>
    <CardMedia
    component="img"
    height="140"
    image={image}
    alt={title}
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
        {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
        ${price}
    </Typography>
    <Typography variant="body2">
        {category}
    </Typography>
    </CardContent>
    <CardActions>
    </CardActions>
    </Card>
    </>
  )
}

export default Productdetails;