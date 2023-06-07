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
import { ServicePricingForm } from "./ServicesDashboard/ServicePricingForm";
import { DeleteButton } from "../Dashboard/DashboardCommon/DeleteButton";
import "../styles/Dashboard.css";
import { ImageForm } from "./DashboardCommon/ImageForm";

export const DashboardServices = () => {
  const [studentServices, setStudentServices] = useState([]);
  const [customerServices, setCustomerServices] = useState([]);
  const [side_images, setSide_images] = useState([]);
  const [studentStartIndex, setStudentStartIndex] = useState(0);
  const [customerStartIndex, setCustomerStartIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_URL}/images`)
      .then((res) => setSide_images(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getServices = () => {
    axios
      .get(`${API_URL}/services`)
      .then((res) => {
        setStudentServices(
          res.data.filter((service) => service.status === "student")
        );
        setCustomerServices(
          res.data.filter((service) => service.status === "customer")
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getServices(), []);

  return (
    <div className="services">
      <ServicesBackground />
      <div className="services-pricings-plans">
        <div className="title-pricing-plans">
          <h1>Pricing Plan</h1>
          <p>Affordable packages contact us for further information</p>
        </div>
        <ServicePricingForm
          type={"customer"}
          onSuccess={() => getServices()}
          onError={(error) => console.log(error)}
          visible
        />
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
            .slice(customerStartIndex, customerStartIndex + 3)
            .map((service) => (
              <div>
                <ServicesPricingPlan
                  id={service.id}
                  title={service.title}
                  price={service.price}
                  description={service.description}
                  imageSrc={service.image}
                />
                <div className="services-student-update">
                  <ServicePricingForm
                    key={service.id}
                    type="customer"
                    service={service}
                    onSuccess={() => getServices()}
                    onError={(error) => console.log(error)}
                    visible
                  />
                  <DeleteButton
                    path={`/services/${service.id}`}
                    onSuccess={() => {
                      getServices();
                      setCustomerStartIndex(0);
                    }}
                    onError={(error) => console.log(error)}
                    visible
                  >
                    You are going to delete this service
                  </DeleteButton>
                </div>
              </div>
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
        <div className="services-students-offers dash-services-students-offers">
          <h1>We Also Offer Educational Services </h1>
          <ServicePricingForm
            type="student"
            onSuccess={() => getServices()}
            onError={(error) => console.log(error)}
            visible
          />
        </div>
        <div className="sideServ">
          <div style={{ width: "40%" }}>
            {side_images
              .filter((img) => img.page === "services" && img.section === 1)
              .map((img) => (
                <>
                  <SideImage
                    key={img.id}
                    image={img.image}
                    className="side-image img-form-edit"
                  />
                  <ImageForm imageSource={img} visible />
                </>
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
              .slice(studentStartIndex, studentStartIndex + 2)
              .map((service) => (
                <div>
                  <ServicesStudentsOffer
                    icon={faCamera}
                    title={service.title}
                    description={service.description}
                  />
                  <div className="services-student-update">
                    <ServicePricingForm
                      type={"student"}
                      service={service}
                      onSuccess={() => getServices()}
                      onError={(error) => console.log(error)}
                      visible
                    />
                    <DeleteButton
                      path={`/services/${service.id}`}
                      onSuccess={() => {
                        getServices();
                        setStudentStartIndex(0);
                      }}
                      onError={(error) => console.log(error)}
                      visible
                    >
                      You are going to delete this service
                    </DeleteButton>
                  </div>
                </div>
              ))}
            {studentStartIndex + 3 > studentServices.length ? (
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
