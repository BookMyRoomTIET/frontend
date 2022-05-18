import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import HostelCard from "../components/HostelCard";
import Header from "../components/Header";
import { Grid } from "react-loader-spinner";
import { Row, Col, Container } from "react-bootstrap";
import DashboardStyles from "./css/Dashboard.module.css";

import "animate.css";

const Dashboard = () => {
  const [hostelData, setHostelData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/hostel/")
      .then((res) => {
        setHostelData(res.data.Information);
        setImageData(res.data.images);
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
        <div className={DashboardStyles.dashboard}>
          <h1
            className="animate__animated animate__backInUp"
            style={{ textAlign: "center" }}
          >
            Available Hostels
          </h1>
          <Container fluid className={DashboardStyles.availableHostelContainer}>
            <Row>
              {!loading &&
                hostelData.map((hostel) => (
                  <>
                    <Col
                      className="animate__animated animate__backInUp"
                      key={hostel.hostel_id}
                      lg={3}
                    >
                      <HostelCard
                        hostel={hostel}
                        image={imageData[hostel.hostel_id - 1]}
                      />
                    </Col>
                  </>
                ))}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
