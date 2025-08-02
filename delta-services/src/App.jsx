import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./routes/Routing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
