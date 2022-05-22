import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Row, Col, Container, Image } from "react-bootstrap";
import "./css/Preference.css";
const BookYourRoom = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [submit, setSubmit] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [errorLog, setErrorLog] = useState(true);
  const [click, setClick] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data, e) => {
    // axios
    //   .post("https://registrationadventureclub.herokuapp.com/photowalk", {
    //     name: data.firstName + " " + data.lastName,
    //     email: data.email,
    //     rollNum: data.rollNum,
    //     dslr: data.dslr,
    //     device: data.device,
    //     phoneNum: data.phoneNum,
    //   })
    // .then(function (response) {
    //   setSubmit(true);
    //   setErrorLog(true);
    //   setClick(false);
    //   setShow(true);
    //   e.target.reset();
    // })
    // .catch(function (error) {
    //   setSubmit(false);
    //   setErrorLog(false);
    //   setSubmit(false);
    //   if (error.response.data.error.keyPattern.email) {
    //     setValidationError("Email already registered");
    //   } else if (error.response.data.error.keyPattern.rollNum) {
    //     setValidationError("Roll number already registered");
    //   } else if (error.response.data.error.keyPattern.phoneNum) {
    //     setValidationError("Phone number already registered");
    //   }
    // });
  };
  return (
    <div>
      <section className="formSection">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <h4>Hostel Allocated: K</h4>
            <p>Select Your Room</p>
            <Col lg={12}>
              <label className="formLabel">Room Number:</label>
              <select className="preference" {...register("roomNum")}>
                <option value="A222">A222</option>
                <option value="A221">A221</option>
              </select>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <img style={{ width: "100%" }} src="images/k1.jpg" alt="room" />
              <img style={{ width: "100%" }} src="images/k2.jpg" alt="room" />
              <img style={{ width: "100%" }} src="images/k3.jpg" alt="room" />
            </Col>
          </Row>

          <input
            style={{
              color: "black",
              fontWeight: "700",
              fontSize: "1.3rem",
              letterSpacing: "0.2rem",
            }}
            className="formInput"
            type="submit"
            value={click ? "SUBMITTING..." : "Submit"}
            onClick={() => {
              setClick(true);
            }}
          />
        </form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Wohoooo!! Response Submitted </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thankyou for registering. Hope to see you on 11th May in T-105 at
            5:30pm
          </Modal.Body>
          <Modal.Footer>
            <Button
              id="formSubmitBtn"
              style={{ backgroundColor: "#EC5990" }}
              variant="primary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {!errorLog && <p className="formPara">{validationError}</p>}
      </section>
    </div>
  );
};

export default BookYourRoom;
