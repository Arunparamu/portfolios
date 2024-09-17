import React from "react";
import "./abouts.css";
import { FaLinkedin, FaMailBulk } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa"; 
import { FaHackerrank } from "react-icons/fa"; 


const About = () => {
  return (
    <div className="about1">
      <section id="about">
      <h2>About </h2>
      <div className="about2">
        <hr />
        <h3>Link</h3>
        <div>
          <a href="https://www.linkedin.com/in/arun-kumar-b06692248/" className="link1"> <FaLinkedin size={30} color="#0e76a8" /></a><h4 className="link2">LinkedIn</h4>
          <br></br>
          <br></br>
          <a href="https://github.com/Arunparamu/" className="link3"> <FaGithub size={30} color="#0e76a8" />  </a><h4 className="link4">Github</h4>
          <br></br>
          <br></br>
          <a href="https://leetcode.com/u/arunparamu/" className="link5"> <FaHackerrank size={30} color="#0e76a8" />  </a><h4 className="link6">Leetcode</h4>
          <br></br>
          <a href="" className="link5"> <FaMailBulk size={30} color="#0e76a8" />  </a><h4 className="link6">arunkumararunkumar10790@gmail.com</h4>
       
        </div>
      </div>
      </section>
    </div>
  );
};

export default About;
