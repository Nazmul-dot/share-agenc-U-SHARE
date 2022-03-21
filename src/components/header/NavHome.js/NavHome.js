import { Avatar } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut } from "../../../redux/firebaseUsere/userAction";

const NavHome = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(LogOut());
  };
  const { user } = useSelector((state) => state.USER);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        style={{ position: "fixed", width: "100%", zIndex: 100 }}
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
              {/* <Navbar.Text>
                <div className="d-flex">
                  <Avatar>{user.displayName.toUpperCase().charAt()}</Avatar>
                  <div className="align-middle mt-2 ms-2 ">
                    Signed{" "}
                    <Link href="#login" className="text-decoration-none">
                      {user.displayName}
                    </Link>
                  </div>
                </div>
              </Navbar.Text> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavHome;
