
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Slider = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="/src/assets/images/home1.jpg" className="d-block w-100" alt="Slide 1" />
        </div>

        <div className="carousel-item">
          <img src="/src/assets/images/home4.jpg" className="d-block w-100" alt="Slide 2" />
        </div>

        <div className="carousel-item">
          <img src="/src/assets/images/home3.jpg" className="d-block w-100" alt="Slide 3" />
        </div>

      </div>
    </div>
  );
};

export default Slider;

