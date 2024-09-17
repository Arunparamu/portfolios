import React from "react";
import "./projects.css";
import "animate.css";
import proimag1 from "./images/libray.png";
import proimag2 from "./images/arigi.png";
import proimag3 from "./images/binary.png";

const Pro = () => {
  return (
    <div className="pro1">
      <section id="pro">
        <h2>PROJECTS</h2>
        <div className="pro12">
          <div className="pro2 animate__animated animate__fadeInUp animate__delay-1s">
            <img src={proimag1} height={400} width={200} />
            <p>
              <a href="https://github.com/Arunparamu/Library-Management-System">
                Library Management System
              </a>
            </p>
          </div>
          <div className="pro3 animate__animated animate__fadeInUp animate__delay-2s">
            <img src={proimag2} height={400} width={200} />
            <p>
              <a href="https://github.com/Arunparamu/Agrijunction">
                Agrijunction
              </a>
            </p>
          </div>
          <div className="pro4 animate__animated animate__fadeInUp animate__delay-3s">
            <img src={proimag3} height={400} width={200} />
            <p>
              <a href="https://github.com/Arunparamu/Playing-with-numbers">
                Playing with Number
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pro;
