import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import "./css/Preference.css";
const Preference = () => {
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
            <Col lg={12}>
              <label className="formLabel">CGPA</label>
              <input
                className="formInput"
                placeholder="9.75"
                {...register("firstName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i + " ",
                })}
              />
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <label className="formLabel">Preference 1</label>
              <select className="preference" {...register("Preference 1")}>
                <option value="Hostel M">Hostel M</option>
                <option value=" Hostel K"> Hostel K</option>
              </select>
            </Col>
            <Col lg={3}>
              <label className="formLabel">Preference 2</label>
              <select className="preference" {...register("Preference 1")}>
                <option value="Hostel M">Hostel M</option>
                <option value=" Hostel K"> Hostel K</option>
              </select>
            </Col>
            <Col lg={3}>
              <label className="formLabel">Preference 3</label>
              <select className="preference" {...register("Preference 1")}>
                <option value="Hostel M">Hostel M</option>
                <option value=" Hostel K"> Hostel K</option>
              </select>
            </Col>
            <Col lg={3}>
              <label className="formLabel">Preference 4</label>
              <select className="preference" {...register("Preference 1")}>
                <option value="Hostel M">Hostel M</option>
                <option value=" Hostel K"> Hostel K</option>
              </select>
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

export default Preference;
