import React from "react";
import { Link } from "react-router-dom";

import HostelCard from "../components/HostelCard";
import Header from "../components/Header";
import { Row, Col, Container } from "react-bootstrap";
import DashboardStyles from "./css/Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <Header />

      <div className={DashboardStyles.dashboard}>
        <h1 style={{ textAlign: "center" }}>Available Hostels</h1>
        <Container fluid className={DashboardStyles.availableHostelContainer}>
          <Row>
            <Col lg={3}>
              <HostelCard />
            </Col>
            <Col lg={3}>
              <HostelCard />
            </Col>
            <Col lg={3}>
              <HostelCard />
            </Col>
            <Col lg={3}>
              <HostelCard />
            </Col>
            <Col lg={3}>
              <HostelCard />
            </Col>
            <Col lg={3}>
              <HostelCard />
            </Col>
            <Col lg={3}>
              <HostelCard />
            </Col>
            <Col lg={3}>
              <HostelCard />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
