import React from "react";
import pic1 from "./images/av.png";
import "./Header.css";
import "./sam.css";
const Header = () => {
  return (
    <div className="header">
      <div className="task1">
        <div className="task5">
          <img src={pic1} height={150} width={150} className="header0"></img>
          <div className="sec1">
          <a href="#Education"> Education</a>
          </div>
          <div className="sec11">
          <a href="#skill">Skills</a>
          </div>
          <div className="sec2">
          <a href="#pro">Projects</a>
          </div>
          <div className="sec3">
          <a href="#award"> Award</a>
          </div>
          <div className="sec4">
          <a href="#about"> About </a>
          </div>
        </div>
        <h4 className=" header1">Hi, my name is </h4>
        <h2 className="header2">Arunkumar.</h2>
        <h2 className="header3">
          To succeed as a professional in a well-known company worldwide, to
          fairly and honestly accomplish the organization's goals, and to always
          improve my knowledge and abilities.
        </h2>
      </div>
    </div>
  );
};
export default Header;
