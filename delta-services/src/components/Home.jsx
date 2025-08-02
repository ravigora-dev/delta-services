import React, { useState } from "react";
import "../App.css";
import sectionPic from "../assets/section_photo.jpg";
import technical1 from "../assets/technical1.png";
import technical from "../assets/technical.png";
import staffing from "../assets/staffing.png";
import staffing1 from "../assets/staffing1.png";
import pest from "../assets/pest.png";
import pest1 from "../assets/pest1.png";
import security from "../assets/security.png";
import security1 from "../assets/security1.png";
import soft from "../assets/soft.png";
import soft1 from "../assets/soft1.png";
import payroll from "../assets/payroll.png";
import payroll1 from "../assets/payroll1.png";
import sector from "../assets/sector.jpg";
import corporate from "../assets/corporatel-sector.jpg";
import industry from "../assets/industrail-sector.jpg";
import residence from "../assets/residential-sector.webp";
import commercial from "../assets/commerical-sector.jpg";
import healthcare from "../assets/health-sector.jpg";
import education from "../assets/education-sector.jpg";
import retail from "../assets/retail-sector.jpg";
import groupImg from "../assets/groupPic.jpeg";
import companyTeam from "../assets/companyTeam.jpeg";
import Slider from "./Slider";
import Carousel from "./Carousel";
import Footer from "./Footer";
const Home = () => {
  let [img, setImg] = useState(technical1);
  let [staff, setStaff] = useState(staffing1);
  let [pestImg, setPestImg] = useState(pest1);
  let [payrollImg, setPayrollImg] = useState(payroll1);
  let [securityImg, setSecurityImg] = useState(security1);
  let [softImg, setSoftImg] = useState(soft1);
  let [col, setColor] = useState("#242424");
  let [col1, setColor1] = useState("#242424");
  let [col2, setColor2] = useState("#242424");
  let [col3, setColor3] = useState("#242424");
  let [col4, setColor4] = useState("#242424");
  let [col5, setColor5] = useState("#242424");
  let hover = () => {
    setImg(technical);
    setColor("#51B03A");
  };
  let stopHover = () => {
    setImg(technical1);
    setColor("#242424");
  };
  let hover1 = () => {
    setStaff(staffing);
    setColor1("#51B03A");
  };
  let stopHover1 = () => {
    setStaff(staffing1);
    setColor1("#242424");
  };
  let hover2 = () => {
    setPestImg(pest);
    setColor2("#51B03A");
  };
  let stopHover2 = () => {
    setPestImg(pest1);
    setColor2("#242424");
  };
  let hover3 = () => {
    setPayrollImg(payroll);
    setColor3("#51B03A");
  };
  let stopHover3 = () => {
    setPayrollImg(payroll1);
    setColor3("#242424");
  };
  let hover4 = () => {
    setSecurityImg(security);
    setColor4("#51B03A");
  };
  let stopHover4 = () => {
    setSecurityImg(security1);
    setColor4("#242424");
  };
  let hover5 = () => {
    setSoftImg(soft);
    setColor5("#51B03A");
  };
  let stopHover5 = () => {
    setSoftImg(soft1);
    setColor5("#242424");
  };
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

      <div className="container">
        <div className="row row-cols-lg-6  row-cols-md-3 row-cols-md-2 iconMainDiv">
          <div className="col-lg-2 col-md-4">
            <div
              className="iconChildDiv"
              onMouseLeave={stopHover}
              onMouseEnter={hover}
            >
              <img src={img} className="imgDiv" />

              <div className="text-center" style={{ color: `${col}` }}>
                Technical
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div
              className="iconChildDiv"
              onMouseLeave={stopHover1}
              onMouseEnter={hover1}
            >
              <img src={staff} className="imgDiv" />
              <div className="text-center" style={{ color: `${col1}` }}>
                Staff
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div
              className="iconChildDiv"
              onMouseLeave={stopHover2}
              onMouseEnter={hover2}
            >
              <img src={pestImg} className="imgDiv" />
              <div className="text-center" style={{ color: `${col2}` }}>
                Pest
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div
              className="iconChildDiv"
              onMouseLeave={stopHover3}
              onMouseEnter={hover3}
            >
              <img src={payrollImg} className="imgDiv" />
              <div className="text-center" style={{ color: `${col3}` }}>
                Payroll
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div
              className="iconChildDiv"
              onMouseLeave={stopHover4}
              onMouseEnter={hover4}
            >
              <img src={securityImg} className="imgDiv" />
              <div className="text-center" style={{ color: `${col4}` }}>
                Security
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div
              className="iconChildDiv"
              onMouseLeave={stopHover5}
              onMouseEnter={hover5}
            >
              <img src={softImg} className="imgDiv" />
              <div className="text-center" style={{ color: `${col5}` }}>
                Staff
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Out business sector */}

      <div className=" mt-lg-5">
        <div className=" w-100">
          <div className="d-flex flex-wrap">
            <div className="w-25">
              <img src={sector} className="w-100" />
            </div>

            <div className="w-25 mainDiv position-relative">
              <img src={corporate} className="w-100" />
              <div className="position-absolute imgHover">
                <h5 className="text-center position-relative top-50 text-white indexH">
                  Corporate / IT/ ITES
                </h5>
              </div>
            </div>

            <div className="w-25 mainDiv position-relative">
              <img src={industry} className="w-100" />
              <div className="position-absolute imgHover">
                <h5 className="text-center position-relative top-50 text-white indexH">
                  Industry
                </h5>
              </div>
            </div>

            <div className="w-25 mainDiv position-relative">
              <img src={residence} className="w-100" />
              <div className="position-absolute imgHover">
                <h5 className="text-center position-relative top-50 text-white indexH">
                  Residence
                </h5>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap">
            <div className="w-25 mainDiv position-relative">
              <img src={commercial} className="w-100" />
              <div className="position-absolute imgHover">
                <h5 className="text-center position-relative top-50 text-white indexH">
                  Commercial
                </h5>
              </div>
            </div>
            <div className="w-25 mainDiv position-relative">
              <img src={healthcare} className="w-100" />
              <div className="position-absolute imgHover">
                <h5 className="text-center position-relative top-50 text-white indexH">
                  Healthcare
                </h5>
              </div>
            </div>
            <div className="w-25 mainDiv position-relative">
              <img src={education} className="w-100" />
              <div className="position-absolute imgHover">
                <h5 className="text-center position-relative top-50 text-white indexH">
                  Education
                </h5>
              </div>
            </div>
            <div className="w-25 mainDiv position-relative">
              <img src={retail} className="w-100" />
              <div className="position-absolute imgHover">
                <h5 className="text-center position-relative top-50 text-white indexH">
                  Retail
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section */}
      <div style={{ backgroundColor: "#F5F8FA" }} className="section">
        <div className="container h-100">
          <div className="d-flex">
            <div className="w-50 d-flex flex-column justify-content-end">
              <img
                src={groupImg}
                className="w-100 h-75 object-fit-fit"
                style={{
                  borderLeft: "8px solid #f76606ff",
                  borderTop: "8px solid #f76606ff",
                }}
              />
            </div>
            <div className="w-50 secionDiv d-flex flex-column justify-content-end">
              <div className="h-75 d-flex flex-column justify-content-evenly">
                <h3 className="sectionH3">
                  Unparalleled <br />
                  <span style={{ color: "#51B03A" }}>Value</span>
                </h3>
                <p style={{ fontStyle: "italic" }} className="sectionP1">
                  Delta Services Facility Management Pvt. Ltd. is a trusted,
                  single window solutions provider offering excellent facility
                  management services to various business sectors. Our strategic
                  advantage comes from our deep understanding of facility
                  management, and no other company serves our clients the way we
                  do.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div
              className="d-flex flex-column justify-content-center"
              style={{ width: "38%" }}
            >
              <div className="h-75 d-flex flex-column justify-content-evenly">
                <h3 className="sectionH3">
                  Better <br />
                  <span style={{ color: "#51B03A" }}>Quality</span>
                </h3>
                <p
                  style={{ fontStyle: "italic" }}
                  className="pe-lg-4 pe-md-3 pe-sm-2 sectionP1"
                >
                  Delta Services Facility Management Pvt. Ltd. assures quality
                  and excellence in every service we provide, customized
                  precisely to your unique needs. We value long-term
                  partnerships and align ourselves with your goals as trusted
                  collaborators dedicated to delivering superior facility
                  management solutions.
                </p>
              </div>
            </div>
            <div style={{ width: "62%" }}>
              <img
                src={companyTeam}
                className="w-100 object-fit-fit"
                style={{
                  borderRight: "8px solid #f76606ff",
                  borderBottom: "8px solid #f76606ff",
                  height: "85%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Slider />
      </div>

      <div className="mt-5 carouselDiv">
        <Carousel />
      </div>

      <div className="mt-5 footerDiv">
        <Footer />
      </div>
    </>
  );
};

export default Home;
