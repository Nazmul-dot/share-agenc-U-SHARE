import { IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, CardActionArea, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const UpdateOrDelete = ({ deleteShare, _id, updateShare }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  //   const [test, settest] = React.useState(admin);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <IconButton aria-label="settings">
        <MoreVertIcon onClick={handleOpenUserMenu} />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography onClick={() => updateShare(_id)} textAlign="center">
            Update
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography onClick={() => deleteShare(_id)} textAlign="center">
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UpdateOrDelete;
