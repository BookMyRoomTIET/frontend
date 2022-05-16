import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Preference from "../components/Preference";
import BookYourRoom from "../components/BookYourRoom";
import PayDues from "../components/PayDues";
import {
  Modal,
  Button,
  Row,
  Col,
  Container,
  ProgressBar,
} from "react-bootstrap";
import "./css/Allocation.css";

import { BsBricks } from "react-icons/bs";
import { BiHomeSmile } from "react-icons/bi";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
// import axios from "axios";
const AllocationForm = () => {
  const [show, setShow] = useState(1);

  return (
    <div>
      <Header />
      <section className="progressBar">
        <Row style={{ textAlign: "center" }}>
          <Col lg={4}>
            <h4 onClick={() => setShow(1)} className="progressItem">
              {" "}
              <BsBricks />
              <br />
              Preference form
            </h4>
          </Col>
          <Col lg={4}>
            <h4 onClick={() => setShow(2)} className="progressItem">
              {" "}
              <BiHomeSmile />
              <br />
              BookYourRoom
            </h4>
          </Col>
          <Col lg={4}>
            <h4 onClick={() => setShow(3)} className="progressItem">
              {" "}
              <FaMoneyBillWaveAlt />
              <br />
              Pay Your Dues
            </h4>
          </Col>
        </Row>
        <Row style={{ marginTop: "2%" }}>
          <Col lg={12}>
            {" "}
            <ProgressBar animated variant="success" now={15} />{" "}
          </Col>
        </Row>
      </section>

      <section className="contentSection">
        {show === 1 && <Preference />}
        {show === 2 && <BookYourRoom />}
        {show === 3 && <PayDues />}
      </section>
    </div>
  );
};

export default AllocationForm;
