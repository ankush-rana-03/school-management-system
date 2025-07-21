import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const MyNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name"); // optional, for name display

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const getDashboardPath = () => {
    if (role === "admin") return "/admin/";
    if (role === "teacher") return "/teacher/";
    if (role === "parent") return "/parent/";
    return "/";
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="position-relative">
      <Container>
        <Navbar.Brand as={NavLink} to="/">SchoolApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left Links */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" active={location.pathname === "/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" active={location.pathname === "/about"}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" active={location.pathname === "/contact"}>Contact</Nav.Link>
          </Nav>

          {/* Right Buttons */}
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <div className="position-relative">
                <Button
                  variant="light"
                  size="sm"
                  onClick={toggleDropdown}
                  className="d-flex align-items-center"
                >
                  <FaUserCircle className="me-2" size={20} />
                  Profile
                </Button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div
                    className="dropdown-menu dropdown-menu-end show p-3 shadow"
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "100%",
                      minWidth: "200px",
                      zIndex: 9999,
                      backgroundColor: "white",
                      borderRadius: "8px",
                    }}
                  >
                    <p className="mb-2 fw-bold text-dark">
                      👤 {name || "User"} <br />
                      🧩 Role: {role?.toUpperCase()}
                    </p>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={handleLogout}
                      className="w-100"
                    >
                      🔓 Logout
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant={location.pathname === "/login" ? "light" : "outline-light"}
                size="sm"
                onClick={handleLoginRedirect}
              >
                Login
                
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;