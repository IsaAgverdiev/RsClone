import * as React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const BurgerMenu = () => {
  
const  handleDrawerOpen = () => {
    console.log('%cBurgerMenu.tsx line:7 "uou"', 'color: #007acc;', "uou");
  }
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
    // sx={{ mr: 2, ...(open && { display: 'none' }) }}
    >
      <MenuIcon />
    </IconButton>
  )
}


export default BurgerMenu;