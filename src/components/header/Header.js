import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../redux/firebaseUsere/userAction";

import "./header.css";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //let history = useHistory();

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(LogOut());
  };

  const { user } = useSelector((state) => state.USER);
  return (
    <div className="navbartop border border-3">
      <AppBar className="nav navbartop" position="static" sx={{ boxShadow: 0 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters xs={{ border: 2 }}>
            {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography> */}

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              // className="mx-auto"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                //   className="border border-3 me-auto"
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/" className="text-decoration-none text-dark">
                    <Typography textAlign="center">Home</Typography>
                  </Link>
                </MenuItem>
                {/* <MenuItem onClick={handleCloseUserMenu}>
                  <Link
                    to="/contact"
                    className="text-decoration-none text-dark"
                  >
                    <Typography textAlign="center">Contact</Typography>
                  </Link>
                </MenuItem> */}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 7, display: { xs: "flex", md: "none" } }}
            >
              U SHARE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/" className="text-decoration-none">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Home
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
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
                  <Link
                    to="/dashbord"
                    className="text-decoration-none text-dark"
                  >
                    <Typography textAlign="center">Dashbord</Typography>
                  </Link>
                </MenuItem>
                {user.email && (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography onClick={logout} textAlign="center">
                        Logout
                      </Typography>
                    </MenuItem>
                  </>
                )}

                {!user.email && (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        to="/signin"
                        className="text-decoration-none text-dark"
                      >
                        <Typography textAlign="center">SignIn</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        to="/signup"
                        className="text-decoration-none text-dark"
                      >
                        <Typography textAlign="center">SignUp</Typography>
                      </Link>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
