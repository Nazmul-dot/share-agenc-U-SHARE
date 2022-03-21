import { Avatar } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut } from "../../redux/firebaseUsere/userAction";
const Header2 = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(LogOut());
  };
  const { user, profile } = useSelector((state) => state.USER);
  // // console.log(profile);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        className="p-2"
      >
        <Container>
          <Navbar.Brand href="#home">U-SHARE-AGENCY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features" className="fs-5">
                <Link to="/" className="text-decoration-none text-white">
                  Shares
                </Link>
              </Nav.Link>

              <NavDropdown
                className="fs-5"
                title="Dashbord"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none text-dark"
                    to="/dashbord"
                  >
                    Dashbord
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {user.email ? (
                  <>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item>
                      <Link
                        className="text-decoration-none text-dark"
                        to="/signin"
                      >
                        SignIn
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="text-decoration-none text-dark"
                        to="/signup"
                      >
                        SignUp
                      </Link>
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
            <Nav>
              <Navbar.Text>
                {user.email ? (
                  <div className="d-flex">
                    <Avatar
                      src={
                        profile?.picture
                          ? profile?.picture
                          : `data:image/jpeg;base64,${profile?.pictur1}`
                      }
                    ></Avatar>
                    <div className="align-middle mt-2 ms-2 ">
                      Signed{" "}
                      <Link to="/dashbord" className="text-decoration-none">
                        {profile?.name}
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header2;
