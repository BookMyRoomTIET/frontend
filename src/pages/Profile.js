import React from "react";
import Header from "../components/Header";
import { Row, Col, Container, Image } from "react-bootstrap";
import "./css/Profile.css";
import avatar from "../assets/img_avatar.png";
const Profile = () => {
  return (
    <div>
      <Header />
      <section className="profile">
        <h1>Name </h1>
        {/* load name from API */}
        <Row>
          <Col lg={6} className="profile-image">
            <Image width="70%" src={avatar} roundedCircle />
          </Col>
          <Col lg={6} className="profile-details">
            <div className="profile-item">
              <div className="profile-item-text">
                Roll Number:
                <span className="profile-item-value"> 102018047</span>
                {/* Roll number from api */}
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-item-text">
                Year:
                <span className="profile-item-value">1st </span>
                {/* Roll number from api */}
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-item-text">
                Branch:
                <span className="profile-item-value"> COBS</span>
                {/* Roll number from api */}
              </div>
            </div>

            <div className="profile-item">
              <div className="profile-item-text">
                Hostel Allotted:
                <span className="profile-item-value"> None</span>
                {/* Roll number from api */}
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-item-text">
                Room Number:
                <span className="profile-item-value"> None</span>
                {/* Roll number from api */}
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-item-text">
                Phone Number:
                <span className="profile-item-value"> 7253070880</span>
                {/* Roll number from api */}
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Profile;
