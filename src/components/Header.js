import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Marquee from "react-fast-marquee";
import Logo from "../assets/BookMyRoom-logos_transparent.png";
import Avatar from "../assets/img_avatar.png";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/dashboard">
            <img src={Logo} style={{ width: "200px" }} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/allocation"> Hostel Allocation</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/profile">
                <Image
                  src={Avatar}
                  roundedCircle="true"
                  style={{ width: "30px" }}
                  alt=""
                />
              </Nav.Link>
              <NavDropdown title="Actions" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="contactUs">
                  Help & Support
                </NavDropdown.Item>
                <NavDropdown.Item href="/helpSupport">
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Marquee style={{ marginTop: "2%" }} speed="60" pauseOnHover="true">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/allocation"
        >
          Your Hostel Form Preference is still pending. Click here to fill
          preference form.
        </Link>
      </Marquee>
      <Marquee style={{ marginTop: "2%" }} speed="60" pauseOnHover="true">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/preferenceForm"
        >
          Hostel Alloted to you is Hostel K. Click here to select your room.
        </Link>
      </Marquee>
    </div>
  );
};

export default Header;
