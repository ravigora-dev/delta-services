import React from "react";
import "../App.css";
import sectionPic from "../assets/section_photo.jpg";
import technical from "../assets/technical.png";
import staffing from "../assets/staffing.png";
import pest from "../assets/pest.png";
import security from "../assets/security.png";
import soft from "../assets/soft.png";
const Home = () => {
  return (
    <>
      <div className="bannerStyle"></div>
      <div className="section1 d-flex">
        <div className="w-50 d-flex flex-column justify-content-center px-lg-5 px-sm-3">
          <div>
            <h1 className="sectionH1">
              Why are we <b style={{ color: "#E56D1D" }}>different</b> ?
            </h1>
            <p className="sectionP my-lg-5 my-sm-3">
              At the core of our business is a single-minded vision: to
              transform the way facility management is perceived and delivered
              in India. We have meticulously built our systems and processes to
              support this mission, delivering a seamless experience across
              Integrated Facility Management services including{" "}
              <b> Housekeeping, Security, and Technical Support</b>. Our
              approach begins with a rigorous understanding of each client’s
              unique requirements. By thoroughly researching and engaging with
              our clients, we design and implement tailored solutions that
              address their specific needs—whether for commercial or residential
              environments. This deep insight into our clients' businesses
              empowers us to deliver services that not only meet but exceed
              expectations. Over the past decade, we have successfully elevated
              facility management from a traditional back-end function to a
              strategic business partnership. Our focus on operational
              efficiency and cost optimization has consistently enabled our
              clients to reduce overheads and enhance their bottom line. In
              essence, our greatest differentiator is our commitment to aligning
              facility management with our clients' business
              objectives—partnering with them to deliver value, support growth,
              and drive meaningful change.
            </p>
            <h3
              style={{ color: "#525252", fontStyle: "italic" }}
              className="quota"
            >
              <b>
                “A trusted integrated facility management partner who operates
                as part of the client team.”
              </b>
            </h3>
          </div>
        </div>
        <div className="h-100 w-50 d-flex justify-content-center flex-wrap align-content-center">
          <img
            src={sectionPic}
            height="70%"
            width="80%"
            className="object-fit-fit border"
          />
        </div>
      </div>

      <div
        className="border d-flex justify-content-around"
        style={{ height: "200px" }}
      >
        <div>
          <img src={technical} className="imgDiv" />
        </div>
        <div>
          <img src={staffing} className="imgDiv" />
        </div>
        <div>
          <img src={pest} className="imgDiv" />
        </div>
        <div>
          <img src={security} className="imgDiv" />
        </div>
        <div>
          <img src={soft} className="imgDiv" />
        </div>
      </div>
    </>
  );
};

export default Home;
