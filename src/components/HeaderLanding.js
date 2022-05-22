import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Logo from "../assets/BookMyRoom-logos_transparent.png";
const HeaderLanding = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} style={{ width: "200px" }} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/hostels">Hostels</Nav.Link>
              <Nav.Link href="#footer">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/">
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderLanding;
