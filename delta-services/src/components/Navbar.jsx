import React from "react";
import logo from "../assets/logoPng.png";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white position-sticky top-0">
        <div class="container-fluid">
          <a class="navbar-brand d-flex flex-wrap align-content-end" href="#">
            <img src={logo} height={55} width={50} />
            <span className="fw-bold d-flex flex-wrap align-content-end">
              <div className="mt-2">
                <b style={{ color: "#E56D1D" }} className="fs-1">
                  D
                </b>
                <b style={{ color: "#042A64" }} className="fs-3">
                  elta
                </b>{" "}
                <b style={{ color: "#CBFD03" }} className="fs-3">
                  <b style={{ color: "#E56D1D" }} className="fs-1">
                    S
                  </b>
                  ervices
                </b>
              </div>
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-lg-flex justify-content-lg-end"
            id="navbarNav"
          >
            <div className="w-50">
              <ul class="navbar-nav fs-5 fw-semibold">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item mx-lg-3">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul style={{ listStyleType: "none" }} className="mt-3 p-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <MdMarkEmailRead /> rajinikanth.cheera@deltaservices.co.in
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <FaPhoneVolume /> +91 95331 51277
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
