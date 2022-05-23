import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "react-loader-spinner";
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
  const [available, setAvailData] = useState([]);
  const [preference1, setPref1] = useState("");
  const [preference2, setPref2] = useState("");
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/hostel/available/", {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setAvailData(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

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
  const onSubmit = (data, e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:8000/hostel/preference/",
        {
          preferenceOne: data.Preference1,
          preferenceTwo: data.Preference2,
          name: profileData.name,
          rollNumber: profileData.registration_id,
          cgpa: data.cgpa,
        },
        {
          headers: {
            Authorization: "Token " + localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        setSubmit(true);
        setErrorLog(true);
        setClick(false);
        setShow(true);
        e.target.reset();
      })
      .catch(function (error) {
        setSubmit(false);
        setErrorLog(false);
        setSubmit(false);
        alert("Error in submitting form");
      });
  };
  return (
    <div>
      {loading ? (
        <div style={{ margin: "10% 45%" }}>
          <Grid color="black" ariaLabel="loading-indicator" />
        </div>
      ) : (
        <section className="formSection">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg={12}>
                <label className="formLabel">CGPA</label>
                <input
                  className="formInput"
                  placeholder="9.75"
                  {...register("cgpa", {
                    required: true,
                  })}
                />
              </Col>
            </Row>

            <Row>
              <Col lg={3}>
                <label className="formLabel">Preference 1</label>
                <select className="preference" {...register("Preference1")}>
                  {available &&
                    available.map((hostel) => {
                      return (
                        <option
                          value={hostel.hostel_id.hostelName}
                          key={hostel.hostel_id.hostelName}
                          onClick={(e) => {
                            setPref1(e.target.value);
                          }}
                        >
                          {hostel.hostel_id.hostelName}
                        </option>
                      );
                    })}
                </select>
              </Col>
              <Col lg={3}>
                <label className="formLabel">Preference 2</label>
                <select className="preference" {...register("Preference2")}>
                  {available &&
                    available.map((hostel) => {
                      return (
                        <option
                          value={hostel.hostel_id.hostelName}
                          key={hostel.hostel_id.hostelName}
                          onClick={(e) => {
                            setPref2(e.target.value);
                          }}
                        >
                          {hostel.hostel_id.hostelName}
                        </option>
                      );
                    })}
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
              Sit back and relax, your hostel will be allocated once the
              preference form filling time is over.
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
      )}
    </div>
  );
};

export default Preference;
