import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HostelCard from "../components/HostelCard";
import "./css/Hostels.css";

const Hostels = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col key="1" lg={3}>
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
  );
};

export default Hostels;
