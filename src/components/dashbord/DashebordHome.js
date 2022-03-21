import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ShareBox from "./share/ShareBox";
import Admin from "./admin/Admin";
import AdminAprobal from "../home/allShare/adminAprob/AdminAprobal";
import UserApprovalShare from "../home/allShare/usershare/UserApprovalShare";
import UserPandingShare from "../home/allShare/usershare/UserPandingShare";
import Comment from "../home/commentPart/Comment";
import Reviw from "../home/review/Reviw";
import Profile from "./profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import UpdateProfile from "./profile/UpdateProfile";
import { PerUserProfile } from "./profile/PerUserProfile";
import { LogOut } from "../../redux/firebaseUsere/userAction";

const drawerWidth = 240;

function DashebordHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const { admin } = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(LogOut());
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {admin ? (
          <>
            <Link to="/" className="text-decoration-none text-dark text-center">
              <ListItem button>
                <ListItemText className="text-center" primary="Home" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}/share`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Share" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}/admin`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Add Admin" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}/admincheckpandingpost`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Pandding Post" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}/rivew`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Rivew" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Profile" />
              </ListItem>
            </Link>
            <Link
              onClick={logout}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Logout" />
              </ListItem>
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="text-decoration-none text-dark text-center">
              <ListItem button>
                <ListItemText className="text-center" primary="Home" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}/share`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Share" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}/usercheckapprovalgpost`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Approval Post" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}/usercheckpandingpost`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Pandding Post" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}/rivew`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Rivew" />
              </ListItem>
            </Link>
            <Link
              onClick={handleDrawerToggle}
              to={`${url}`}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Profile" />
              </ListItem>
            </Link>
            <Link
              onClick={logout}
              className="text-decoration-none text-dark text-center"
            >
              <ListItem button>
                <ListItemText className="text-center" primary="Logout" />
              </ListItem>
            </Link>
          </>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 0,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Typography paragraph>
          <Switch>
            <Route exact path={path}>
              <Profile></Profile>
            </Route>
            <Route path={`${path}/share`}>
              <ShareBox></ShareBox>
            </Route>
            <Route path={`${path}/admin`}>
              <Admin></Admin>
            </Route>
            <Route path={`${path}/admincheckpandingpost`}>
              <AdminAprobal></AdminAprobal>
            </Route>
            <Route path={`${path}/usercheckapprovalgpost`}>
              <UserApprovalShare></UserApprovalShare>
            </Route>
            <Route path={`${path}/usercheckpandingpost`}>
              <UserPandingShare></UserPandingShare>
            </Route>
            <Route path={`${path}/rivew`}>
              <Reviw></Reviw>
            </Route>
            <Route path={`${path}/updateprofile/:email`}>
              <UpdateProfile></UpdateProfile>
            </Route>
            <Route path={`${path}/perUserProfile/:email`}>
              <PerUserProfile></PerUserProfile>
            </Route>
          </Switch>
        </Typography>
      </Box>
    </Box>
  );
}

DashebordHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashebordHome;
