import React from 'react'
import { AppBar, Button, IconButton} from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { AccessAlarm } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
export const Navbar = () => {
  return (
    <>
    <AppBar position="static" >
  <Toolbar variant="dense">
    <IconButton color="inherit" sx={{ mr: 2}} >
    <AccessAlarm/>
    </IconButton>
    <Typography variant="h6" color="inherit" sx={{alignContent:'center',color:"black"}}>
      <a href="https://lichess.org/" target="_blank" rel="noreferrer">Photos</a> 
    </Typography>
     <Typography sx={{ml:'87%'}}>
    <Button endIcon={<AttachMoneyIcon/>} sx={{color:"white"}} disabled>Money</Button>
    </Typography>
     </Toolbar>
    </AppBar>
    </>
  )
}
