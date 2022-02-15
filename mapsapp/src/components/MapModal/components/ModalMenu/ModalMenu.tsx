import React, { useState } from "react"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItem from "@mui/material/ListItem";

const ModalMenu = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <ListItem onClick={handleClose}>Profile</ListItem>
        <ListItem onClick={handleClose}>My account</ListItem>
        <ListItem onClick={handleClose}>Logout</ListItem>

    </div>
  )
}

export default ModalMenu