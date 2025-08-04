// import React from "react";

// const Slider = () => {
//   return (
//     <>
//       <div className="border" style={{ height: "300px" }}>
//         <h3 className="text-center">Testimonial</h3>
//         <div className="d-flex border container h-50">
//           <div className="border d-flex flex-column justify-content-end">
//             Prev
//           </div>
//           <div style={{ width: "auto" }}>
//             <div className="sliderDiv">

//               <div className="d-flex h-100 flex-column justify-content-between">
//                 <p className="border p-3" style={{ textAlign: "center" }}>
//                   My Home Group is extremely satisfied with the cleaning and
//                   management services provided by Delta Services Facility
//                   Management Pvt. Ltd. Their professionalism, attention to
//                   detail, and reliable approach have helped us maintain a clean
//                   and well-managed environment across our facilities. We
//                   appreciate their commitment to quality and consistent support
//                   in meeting our operational needs.
//                 </p>
//                 <h5 className="bold text-center border m-0">My Home Group</h5>
//               </div>

//               <div className="d-flex h-100 flex-column justify-content-between">
//                 <p className="border p-3" style={{ textAlign: "center" }}>
//                   My Home Group is extremely satisfied with the cleaning and
//                   management services provided by Delta Services Facility
//                   Management Pvt. Ltd. Their professionalism, attention to
//                   detail, and reliable approach have helped us maintain a clean
//                   and well-managed environment across our facilities. We
//                   appreciate their commitment to quality and consistent support
//                   in meeting our operational needs.
//                 </p>
//                 <h5 className="bold text-center border m-0">
//                   CYBERCITY Builders
//                 </h5>
//               </div>

//               <div className="d-flex h-100 flex-column justify-content-between">
//                 <p className="border p-3" style={{ textAlign: "center" }}>
//                   My Home Group is extremely satisfied with the cleaning and
//                   management services provided by Delta Services Facility
//                   Management Pvt. Ltd. Their professionalism, attention to
//                   detail, and reliable approach have helped us maintain a clean
//                   and well-managed environment across our facilities. We
//                   appreciate their commitment to quality and consistent support
//                   in meeting our operational needs.
//                 </p>
//                 <h5 className="bold text-center border m-0">RMZ Spire</h5>
//               </div>

//               <div className="d-flex h-100 flex-column justify-content-between">
//                 <p className="border p-3" style={{ textAlign: "center" }}>
//                   My Home Group is extremely satisfied with the cleaning and
//                   management services provided by Delta Services Facility
//                   Management Pvt. Ltd. Their professionalism, attention to
//                   detail, and reliable approach have helped us maintain a clean
//                   and well-managed environment across our facilities. We
//                   appreciate their commitment to quality and consistent support
//                   in meeting our operational needs.
//                 </p>
//                 <h5 className="bold text-center border m-0">TV9</h5>
//               </div>

//               <div className="d-flex h-100 flex-column justify-content-between">
//                 <p className="border p-3" style={{ textAlign: "center" }}>
//                   My Home Group is extremely satisfied with the cleaning and
//                   management services provided by Delta Services Facility
//                   Management Pvt. Ltd. Their professionalism, attention to
//                   detail, and reliable approach have helped us maintain a clean
//                   and well-managed environment across our facilities. We
//                   appreciate their commitment to quality and consistent support
//                   in meeting our operational needs.
//                 </p>
//                 <h5 className="bold text-center border m-0">Arha Media</h5>
//               </div>
//             </div>
//             <div className="border d-flex flex-column justify-content-end">
//               Next
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import React, { useState } from "react";
import "../App.css";
const testimonials = [
  {
    text: `My Home Group is extremely satisfied with the cleaning and
           management services provided by Delta Services Facility
           Management Pvt. Ltd. Their professionalism, attention to
           detail, and reliable approach have helped us maintain a clean
           and well-managed environment across our facilities. We
           appreciate their commitment to quality and consistent support
           in meeting our operational needs.`,
    company: "My Home Group",
  },
  {
    text: `CYBERCITY Builders appreciates the excellent building maintenance,
           deep cleaning, and security services provided by Delta Services Facility
           Management Pvt. Ltd. Their professionalism and attention to detail have 
           helped us maintain safe, clean, and well-managed properties with complete
           peace of mind.`,
    company: "CYBERCITY Builders",
  },
  {
    text: `RMZ Spire values the exceptional facility management solutions delivered 
           by Delta Services Facility Management Pvt. Ltd. Their expert team ensures 
           our building maintenance, deep cleaning, and security services are executed 
           with precision and reliability. Thanks to their commitment, our premises remain 
           pristine, safe, and efficiently managed, enabling us to focus on business growth 
           without facility concerns.`,
    company: "RMZ Spire",
  },
  {
    text: `TV9 values the reliable building maintenance, deep cleaning, and security
           services provided by Delta Services Facility Management Pvt. Ltd. Their 
           professional team ensures our facilities are consistently safe, spotless,
           and well-maintained, allowing us to focus on delivering quality broadcasting 
           without facility concerns`,
    company: "TV9",
  },
  {
    text: `Arha Media greatly appreciates the comprehensive building maintenance, deep cleaning, 
           and security services delivered by Delta Services Facility Management Pvt. Ltd. Their 
           diligent team ensures our facilities remain clean, secure, and efficiently managed, 
           allowing us to concentrate fully on our media operations. Their consistent professionalism 
           and proactive approach have made them a trusted partner in maintaining our workspace standards.`,
    company: "Arha Media",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Previous slide handler with wrap-around
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Next slide handler with wrap-around
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="sliderDiv">
      <h3 className="text-center slideH">Testimonial</h3>
      <div className="d-flex  container h-50 align-items-center">
        <button
          className="d-flex btn btn-primary flex-column justify-content-center align-items-center"
          style={{ width: "60px", cursor: "pointer" }}
          onClick={prevSlide}
        >
          Prev
        </button>

        <div style={{ flex: 1, padding: "0 20px" }}>
          <div
            className="d-flex h-100 flex-column justify-content-between"
            style={{ fontStyle: "italic" }}
          >
            <p className="text-center sliderP" style={{ textAlign: "center" }}>
              {testimonials[currentIndex].text}
            </p>
            <h5 className="fw-bold text-center m-0 sliderH5">
              {testimonials[currentIndex].company}
            </h5>
          </div>
        </div>

        <button
          className="d-flex btn btn-primary flex-column justify-content-center align-items-center"
          style={{ width: "60px", cursor: "pointer" }}
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
