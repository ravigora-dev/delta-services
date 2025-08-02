import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slick1 from "../assets/slick1.JPEG";
import slick2 from "../assets/slick2.JPEG";
import slick3 from "../assets/slick3.JPEG";
import slick4 from "../assets/slick4.JPEG";
import slick5 from "../assets/slick5.JPEG";
import slick6 from "../assets/slick6.JPEG";
import slick7 from "../assets/slick7.JPEG";
import slick8 from "../assets/slick8.JPEG";
import slick9 from "../assets/slick9.JPEG";
import slick10 from "../assets/slick10.JPEG";
import slick11 from "../assets/slick11.JPEG";
import slick12 from "../assets/slick12.JPEG";
import slick13 from "../assets/slick13.jpeg";
import slick14 from "../assets/slick14.jpeg";
import slick15 from "../assets/slick15.jpeg";
import slick16 from "../assets/slick16.jpeg";
import slick17 from "../assets/slick17.jpeg";
import slick18 from "../assets/slick18.jpeg";
import slick19 from "../assets/slick19.jpeg";
import Footer from "./Footer";
const Service = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    // Ensures slider loads after DOM mounts
    setShowSlider(true);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(showSlider);
  return (
    <>
      <h1 className="text-center mb-5">
        Our <b style={{ color: "#E56D1D" }}>Services</b>
      </h1>

      <div style={{ backgroundColor: "#E56D1D" }}>
        <div className="container mainContainer">
          <div
            className="slider-container sliderContainer"
            // style={{ height: "480px", width: "100%" }}
          >
            {showSlider && (
              <Slider {...settings} className="slicker">
                {[
                  slick12,
                  slick13,
                  slick14,
                  slick15,
                  slick16,
                  slick17,
                  slick18,
                  slick19,
                  slick2,
                  slick3,
                  slick4,
                  slick5,
                  slick6,
                  slick7,
                  slick8,
                  slick9,
                  slick10,
                  slick11,
                  slick1,
                ].map((img, i) => (
                  <div
                    key={i}
                    className="d-flex justify-content-center align-items-center h-100"
                  >
                    <img
                      src={img}
                      alt={`service-${i}`}
                      //   style={{
                      //     height: "480px",
                      //     width: "50%",
                      //     objectFit: "cover",
                      //   }}
                      className="slickImg"
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="row row-cols-lg-3">
          <div className="col-lg-4">
            <div>
              <div>
                <img src="" />
              </div>
              <div>
                <h5>Soft Services</h5>
                <ul>
                  <li>Housekeeping</li>
                  <li>Pantry Support Services</li>
                  <li>Office Boys</li>
                  <li>Horticulture</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
        </div>
      </div>

      <div className="mt-5" style={{ height: "300px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Service;
