import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
function Productrender(props) {
  return (
    <>
    <Card sx={{width:'20vw'}}>
    <CardMedia
    component="img"
    height="140"
    image={props.image}
    alt={props.title}
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
        {props.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
        ${props.price}
    </Typography>
    <Typography variant="body2">
        {props.category}
    </Typography>
    </CardContent>
    <CardActions>
    <Button size="small">
        <Link to={`/product/${props.id}`}>
        Explore item
        </Link>
    </Button>
    </CardActions>
    </Card>
    </>
  )
}

export default Productrender;