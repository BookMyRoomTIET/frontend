import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Marquee from "react-fast-marquee";
import Logo from "../assets/BookMyRoom-logos_transparent.png";
import Avatar from "../assets/img_avatar.png";

const Header = () => {
  const [profileData, setProfileData] = useState([]);

  const [loading, setLoading] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/user/student/", {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfileData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logout = () => {
    console.log("logging out");
    axios
      .post("http://127.0.0.1:8000/user/auth/logout/", {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                <NavDropdown.Item href="#footer">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {profileData.hostel && (
        <Marquee style={{ marginTop: "2%" }} speed="60" pauseOnHover="true">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/allocation"
          >
            Your Hostel Form Preference is still pending. Click here to fill
            preference form.
          </Link>
        </Marquee>
      )}

      {profileData.hostel === -1 && (
        <Marquee style={{ marginTop: "2%" }} speed="60" pauseOnHover="true">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/preferenceForm"
          >
            Hostel Alloted to you is Hostel K. Click here to select your room.
          </Link>
        </Marquee>
      )}
    </div>
  );
};

export default Header;
