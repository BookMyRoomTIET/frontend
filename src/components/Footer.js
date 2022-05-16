import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import Logo from "../assets/BookMyRoom-logos_transparent.png";
import "./css/Footer.css";

const Footer = () => {
  return (
    <div>
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
                <i className="fa fa-map-marker" />
                <p>Thapar University Patiala</p>
              </div>
              <div>
                <i className="fa fa-phone" />
                <p>Contact Us:</p>
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
                    bookMyRoom@thapar.edu
                  </a>
                  <br />
                  <p style={{ color: "white", fontWeight: "400" }}>
                    +91 7253070880
                  </p>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div className="footer-right">
              <p className="footer-company-about">
                <span>About Us</span>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                euismod convallis velit, eu auctor lacus vehicula sit amet.
              </p>
              <div className="footer-icons">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa fa-github" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;
