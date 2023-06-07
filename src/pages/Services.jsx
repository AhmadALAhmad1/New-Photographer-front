import React, { useEffect } from "react";
import { API_URL } from "../constants";
import axios from "axios";
import { useState } from "react";
import "../styles/Services.css";
import { ServicesBackground } from "../components/ServicesBackground";
import { ServicesPricingPlan } from "../components/ServicesPricingPlan";
import { SideImage } from "../components/SideImage";
import { Button } from "@mui/material";
import { ServicesStudentsOffer } from "../components/ServicesStudentsOffer";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  const [studentServices, setStudentServices] = useState([]);
  const [customerServices, setCustomerServices] = useState([]);
  const [side_images, setSide_images] = useState([]);
  const [studentStartIndex, setStudentStartIndex] = useState(0);
  const [customerStartIndex, setCustomerStartIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`https://jayy-pos5.onrender.com/api/services`)
      .then((res) => {
        setStudentServices(
          res.data.filter((service) => service.status === "student")
        );
        setCustomerServices(
          res.data.filter((service) => service.status === "customer")
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://jayy-pos5.onrender.com/api/images`)
      .then((res) => setSide_images(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="services">
      <ServicesBackground />
      <div className="services-pricings-plans">
        <div className="title-pricing-plans">
          <h1>Pricing Plan</h1>
          <p>Affordable packages contact us for further information</p>
        </div>
        <div className="services-plans">
          {customerStartIndex === 0 ? (
            <Button
              id="disabled"
              className="about-nofunction-button"
              style={{ cursor: "default", minWidth: "10px" }}
            ></Button>
          ) : (
            <Button
              style={{ minWidth: "10px" }}
              className="carousel-control-prev"
              variant="contained"
              color="primary"
              onClick={() => setCustomerStartIndex(customerStartIndex - 1)}
              id="enabled"
            >
              <span style={{ fontWeight: "lighter", fontSize: "20px" }}>
                {"«"}
              </span>
            </Button>
          )}
          {customerServices
            .filter((service) => service.status === "customer")
            .slice(customerStartIndex, customerStartIndex + 3)
            .map((service) => (
              <ServicesPricingPlan
                title={service.title}
                price={service.price}
                description={service.description}
                imageSrc={service.image}
              />
            ))}
          {customerStartIndex + 4 > customerServices.length ? (
            <Button
              className="about-nofunction-button"
              id="disabled"
              style={{ cursor: "default", minWidth: "10px" }}
            ></Button>
          ) : (
            <Button
              style={{ minWidth: "10px" }}
              id="enabled"
              className="carousel-control-next"
              variant="contained"
              color="primary"
              onClick={() => setCustomerStartIndex(customerStartIndex + 1)}
            >
              <span style={{ fontWeight: "lighter", fontSize: "20px" }}>
                {"»"}
              </span>
            </Button>
          )}
        </div>
      </div>
      <div>
        <div className="services-students-offers">
          <h1>We Also Offer Educational Services </h1>
        </div>
        <div className="sideServ">
          <div style={{ width: "50%" }}>
            {side_images
              .filter((img) => img.page === "services" && img.section === 1)
              .map((img) => (
                <SideImage
                  key={img.id}
                  image={img.image}
                  className="side-image"
                />
              ))}
          </div>
          <div className="services-offers">
            {studentStartIndex === 0 ? (
              <Button
                id="disabled"
                className="about-nofunction-button"
                style={{ cursor: "default", minWidth: "10px" }}
              ></Button>
            ) : (
              <Button
                style={{ minWidth: "10px" }}
                className="carousel-control-prev"
                variant="contained"
                color="primary"
                onClick={() => setStudentStartIndex(studentStartIndex - 1)}
                id="enabled"
              >
                <span style={{ fontWeight: "lighter", fontSize: "20px" }}>
                  {"«"}
                </span>
              </Button>
            )}
            {studentServices
              .filter((service) => service.status === "student")
              .slice(studentStartIndex, studentStartIndex + 3)
              .map((service) => (
                <ServicesStudentsOffer
                  icon={faCamera}
                  title={service.title}
                  description={service.description}
                />
              ))}
            {studentStartIndex + 4 > studentServices.length ? (
              <Button
                className="about-nofunction-button"
                id="disabled"
                style={{ cursor: "default", minWidth: "10px" }}
              ></Button>
            ) : (
              <Button
                style={{ minWidth: "10px" }}
                id="enabled"
                className="carousel-control-next"
                variant="contained"
                color="primary"
                onClick={() => setStudentStartIndex(studentStartIndex + 1)}
              >
                <span style={{ fontWeight: "lighter", fontSize: "20px" }}>
                  {"»"}
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
