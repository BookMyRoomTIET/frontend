import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import Logo from "../assets/BookMyRoom-logos_transparent.png";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillMail, AiFillInstagram } from "react-icons/ai";
import "./css/Footer.css";

const Footer = () => {
  return (
    <div>
      <section id="footer">
        <footer className="footer-distributed">
          <Row>
            <Col lg={4} sm={6}>
              <div className="footer-left">
                <Image width="200px" src={Logo}></Image>
                <p className="footer-company-name">BookMyRoom © 2022</p>
              </div>
            </Col>
            <Col lg={4} sm={6} style={{}}>
              <div className="footer-center">
                <div>
                  <h4 style={{ marginBottom: "2%" }}>Contact Us:</h4>
                </div>
                <div>
                  <i className="fa fa-envelope" />
                  <p>
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "400",
                      }}
                      href="mailto:support@company.com"
                    >
                      <AiFillMail /> bookMyRoom@thapar.edu
                    </a>
                    <br />
                    <p style={{ color: "white", fontWeight: "400" }}>
                      <BiPhoneCall />
                      +91 7253070880
                    </p>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="footer-right">
                <p className="footer-company-about">
                  <h4 style={{ color: "black" }}>About Us</h4>
                  Hostel Room Booking Platform catering to all the students of
                  TIET Patiala campus for now. We are a team of students who are
                  working on this project to make it a better place for students
                  to book their room.
                </p>
              </div>
            </Col>
          </Row>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
