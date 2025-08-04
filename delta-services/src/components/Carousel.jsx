import React from "react";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team4.jpeg";
import team5 from "../assets/team5.jpeg";
import team6 from "../assets/team6.jpeg";
import team7 from "../assets/team7.jpeg";
import team8 from "../assets/team8.jpeg";
import team9 from "../assets/team9.jpeg";
import team10 from "../assets/team10.jpeg";
import team11 from "../assets/team11.jpeg";
import team12 from "../assets/team12.jpeg";
let Carousel = () => {
  return (
    <>
      <div className="container rounded-3">
        <h2 className="text-center mb-4 py-2">Our Team</h2>
        <div
          id="carouselExampleInterval"
          className="carousel slide rounded-3"
          data-bs-ride="carousel"
          style={{ height: "450px" }}
        >
          <div className="carousel-inner rounded-3">
            <div class="carousel-item active" data-bs-interval="1000">
              <div className="d-flex justify-content-center">
                <img
                  src={team1}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="1000">
              {/* <img
                src={team2}
                className="d-block object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team2}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="1000">
              {/* <img
                src={team3}
                className="d-block object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team3}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              {/* <img
                src={team4}
                className="d-block  object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team4}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="1000">
              {/* <img
                src={team5}
                className="d-block  object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team5}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="1000">
              {/* <img
                src={team6}
                className="d-block  object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team6}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="1000">
              {/* <img
                src={team7}
                className="d-block  object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team7}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="1000">
              {/* <img
                src={team8}
                className="d-block  object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team8}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="1000">
              {/* <img
                src={team9}
                className="d-block object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team9}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="1000">
              {/* <img
                src={team10}
                className="d-block  object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team10}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="1000">
              {/* <img
                src={team11}
                className="d-block object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team11}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              {/* <img
                src={team12}
                className="d-block  object-fit-cover rounded-3"
                style={{ width: "100%", height: "450px" }}
                alt="..."
              /> */}
              <div className="d-flex justify-content-center">
                <img
                  src={team12}
                  className="d-block object-fit-cover rounded-3"
                  style={{ width: "80%", height: "450px" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-secondary rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-secondary rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
