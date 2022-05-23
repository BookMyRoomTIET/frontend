import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import HostelCard from "../components/HostelCard";
import HeaderLanding from "../components/HeaderLanding";
import "./css/Hostels.css";
import "animate.css";

const Hostels = () => {
  const [hostelData, setHostelData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/hostel/")
      .then((res) => {
        setHostelData(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <HeaderLanding />
      <Container style={{ margin: "10% 1%", overflowX: "hidden" }}>
        <Row>
          {!loading &&
            hostelData &&
            hostelData.map((hostel) => (
              <>
                {hostel.hostelName !== "None" && (
                  <>
                    {" "}
                    <Col
                      className="animate__animated animate__backInUp"
                      key={hostel.hostel_id}
                      lg={3}
                    >
                      <HostelCard
                        hostel={hostel}
                        image={hostel.hostelImage[0].link}
                      />
                    </Col>
                  </>
                )}
              </>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Hostels;
