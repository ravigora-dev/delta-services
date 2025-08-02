import React from "react";
import "../App.css";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
let Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#E56D1D" }} className="h-100">
        <div className="text-white d-flex flex-column flex-wrap align-content-center h-100 justify-content-center">
          <h2 className=" text-center">Delta Services</h2>
          <p className="text-center px-md-5  px-sm-5 footerP">
            Delta Services Managment Proprietorship Pvt. Ltd. 1st Floor, Vishnu
            Avenue,Plot No-17 Kartika Layout,Jai Hind Enclave
            Madhapur,Hyderabad-500081
          </p>
          <p className="text-center">
            <span>
              <MdMarkEmailRead className="text-dark" />{" "}
              Rajinikanth.Cheera@deltaservices.co.in
            </span>{" "}
            <span>
              <FaPhoneVolume className="text-dark" /> +91 95331 51277
            </span>
          </p>
          <div className="text-center">
            © 2025 Delta Services. | Powered by :{" "}
            <a
              href="https://errortechnologies.com/"
              target="_blank"
              className="companyHover"
              style={{ textDecoration: "none" }}
            >
              Error Technologies
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
