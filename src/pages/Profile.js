import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "react-loader-spinner";
import Header from "../components/Header";
import { Row, Col, Container, Image } from "react-bootstrap";
import "./css/Profile.css";
import avatar from "../assets/img_avatar.png";
const Profile = () => {
  const [profileData, setProfileData] = useState([]);

  const [loading, setLoading] = useState(true);
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

  return (
    <div>
      <Header />
      {loading ? (
        <div style={{ margin: "10% 45%" }}>
          <Grid color="black" ariaLabel="loading-indicator" />
        </div>
      ) : (
        <section className="profile">
          {!loading && (
            <>
              {" "}
              <h1>{profileData.name} </h1>
              {/* load name from API */}
              <Row>
                <Col lg={6} className="profile-image">
                  <Image width="70%" src={avatar} roundedCircle />
                </Col>
                <Col lg={6} className="profile-details">
                  <div className="profile-item">
                    <div className="profile-item-text">
                      Roll Number:
                      <span className="profile-item-value">
                        {" "}
                        {profileData.registration_id}
                      </span>
                      {/* Roll number from api */}
                    </div>
                  </div>
                  <div className="profile-item">
                    <div className="profile-item-text">
                      Year:
                      <span className="profile-item-value">
                        {" "}
                        {profileData.extra.grad_year}
                      </span>
                      {/* Roll number from api */}
                    </div>
                  </div>
                  <div className="profile-item">
                    <div className="profile-item-text">
                      Branch:
                      <span className="profile-item-value">
                        {" "}
                        {profileData.extra.branch}
                      </span>
                      {/* Roll number from api */}
                    </div>
                  </div>

                  <div className="profile-item">
                    <div className="profile-item-text">
                      Hostel Allotted:
                      <span className="profile-item-value">
                        {profileData.hostel && <span>None</span>}
                      </span>
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
                      <span className="profile-item-value">
                        {" "}
                        {profileData.phone}
                      </span>
                      {/* Roll number from api */}
                    </div>
                  </div>
                </Col>
              </Row>{" "}
            </>
          )}
        </section>
      )}
    </div>
  );
};

export default Profile;
