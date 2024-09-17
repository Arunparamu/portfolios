import React from "react";
import pic3 from"./images/mcet.png";
import pic4 from"./images/srv.png";
import pic5 from"./images/jayam.png";
import "./Header.css";
const Education = () => {
  return (
    <div>
      <section id="Education">
        <div className="edu">
            <h2>EDUCATION</h2>
            <div className="img1">
            <img src={pic3} height={200} width={200} ></img>
            </div>
            <h3 className="edu1">Dr Mahalingam college of engineering and technology  </h3>
            <h3 className="edu3">B.Tech Information technology</h3>
            <h3 className="edu2">CGPA: 8.2</h3>
            <div className="img2">
            <img src={pic4} height={200} width={200} ></img>
            </div>
            <h3 className="edu11">SRV boys higher secondary school </h3>
            <h3 className="edu33">HSC</h3>
            <h3 className="edu22">Percentage: 88%</h3>
            <div className="img3">
            <img src={pic5} height={200} width={200} ></img>
            </div>
            <h3 className="edu11">JAYAM boys higher secondary school </h3>
            <h3 className="edu33">SSLC</h3>
            <h3 className="edu22">Percentage: 79%</h3>
           
        </div>
      </section>
    </div>
  );
};

export default Education;
