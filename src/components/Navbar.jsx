import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          SchoolApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              exact="true"
              active={location.pathname === "/"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              active={location.pathname === "/about"}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              active={location.pathname === "/contact"}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/login"
              active={location.pathname === "/login"}
            >
              <Button
                variant={
                  location.pathname === "/login" ? "light" : "outline-light"
                }
                size="sm"
              >
                Login
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
