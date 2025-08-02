import React from "react";
import "../App.css";
import team4 from "../assets/team4.jpeg";
import mission from "../assets/mission.JPEG";
import vision from "../assets/vision.JPEG";
import { FaShieldAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <h3 className="text-center">About Us</h3>
      <h4
        style={{ fontStyle: "italic", color: "#E56D1D" }}
        className="text-center  mt-5 px-5 mx-5 aboutQuota"
      >
        "We're your trusted partner for comprehensive facility management
        solutions — from building maintenance to skilled staffing."
      </h4>

      <div
        className="d-flex flex-wrap align-content-center justify-content-around  px-5 aboutDiv mt-5"
        // style={{ height: "400px" }}
      >
        <div className="h-75 w-50">
          <img
            src={team4}
            height="100%"
            width="100%"
            className="object-fit-cover"
          />
        </div>
        <p
          className="w-50 h-75 d-flex flex-column justify-content-center aboutP"
          // style={{ fontSize: "0.95em" }}
        >
          With nearly five years of experience, Della Services Management is a
          trusted provider of integrated facility management solutions. We
          understand the critical role of facilities in supporting business
          operations and are committed to delivering tailored services that
          enhance efficiency and ensure full compliance with operational,
          safety, and sustainability standards.
          <br />
          <br />
          Our solutions are designed to align with your business goals, backed
          by clear service level agreements for consistency and transparency. At
          Della, we continuously invest in training, compliance, technology, and
          data insights to deliver meaningful and reliable service experiences
          to our clients.
        </p>
      </div>

      <div
        className="d-flex flex-wrap align-content-center justify-content-around  px-5 "
        style={{ height: "400px" }}
      >
        <div className="h-75 w-50 d-flex flex-column justify-content-evenly">
          <h3 className="text-center ">Mission</h3>
          <p
            className="d-flex flex-column text-center justify-content-center aboutP"
            // style={{ fontSize: "0.95em" }}
          >
            At Della Services Management, our mission is to deliver reliable,
            efficient, and customized facility management solutions that empower
            our clients to focus on their core business. We strive to create
            safe, clean, and well-managed environments through a commitment to
            operational excellence, skilled workforce development, regulatory
            compliance, and continuous innovation. Our goal is to build lasting
            partnerships based on trust, transparency, and measurable results.
          </p>
        </div>
        <div className="h-75 w-50">
          <img
            src={mission}
            height="100%"
            width="100%"
            className="object-fit-cover"
          />
        </div>
      </div>

      <div
        className="d-flex flex-wrap align-content-center justify-content-around  px-5 "
        style={{ height: "400px" }}
      >
        <div className="h-75 w-50">
          <img
            src={vision}
            height="100%"
            width="100%"
            className="object-fit-fit"
          />
        </div>
        <div className="h-75 w-50 d-flex flex-column justify-content-evenly">
          <h3 className="text-center ">Vision</h3>
          <p
            className="d-flex flex-column text-center justify-content-center aboutP"
            // style={{ fontSize: "0.95em" }}
          >
            To be a leading provider of integrated facility and workforce
            management solutions, recognized for our commitment to quality,
            innovation, and customer satisfaction. At Della Services Management,
            we envision transforming the way businesses manage their
            environments by setting new benchmarks in service excellence,
            sustainability, and operational efficiency.
          </p>
        </div>
      </div>

      <div className="mt-5" style={{ height: "200px" }}>
        <h3 className="text-center">Our Values</h3>

        <div className="container h-75">
          <div className="row row-cols-4 h-100 text-center flex-wrap align-content-center">
            <div>
              <FaShieldAlt
                className="text-secondary"
                style={{ fontSize: "60px" }}
              />
              <div>Safety</div>
            </div>
            <div>
              <FaHandshake
                className="text-secondary"
                style={{ fontSize: "60px" }}
              />
              <div>Trust</div>
            </div>
            <div>
              <MdGroups
                className="text-secondary"
                style={{ fontSize: "60px" }}
              />
              <div>Integrity</div>
            </div>
            <div>
              <FaThumbsUp
                className="text-secondary"
                style={{ fontSize: "60px" }}
              />
              <div>Respect</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5" style={{ height: "300px" }}>
        <Footer />
      </div>
    </>
  );
};

export default About;
