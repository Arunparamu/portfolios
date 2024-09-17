import React from "react";
import { motion } from "framer-motion";
import Skimg1 from "./images/java.png";
import Skimg2 from "./images/python.png";
import Skimg3 from "./images/html.jpg";
import Skimg4 from "./images/flutter.jpg";
import Skimg5 from "./images/javascript.png";
import Skimg6 from "./images/mysql.jpg";
import "./Skill.css";

const Skill = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="skill">
      <section id="skill">
        <h2>SKILLS</h2>
        <div className="skill1">
          <motion.img
            src={Skimg1}
            height={200}
            width={200}
            className="skill2"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2.0, delay: 0.1 }}
          />
          <motion.img
            src={Skimg2}
            height={200}
            width={200}
            className="skill3"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2.8, delay: 0.3 }}
          />
          <motion.img
            src={Skimg3}
            height={200}
            width={200}
            className="skill4"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2.8, delay: 0.5 }}
          />
        </div>
        <div className="skill11">
          <motion.img
            src={Skimg4}
            height={200}
            width={200}
            className="skill22"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2.8, delay: 0.7 }}
          />
          <motion.img
            src={Skimg5}
            height={200}
            width={200}
            className="skill33"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2.8, delay: 0.9 }}
          />
          <motion.img
            src={Skimg6}
            height={200}
            width={200}
            className="skill43"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2.8, delay: 1.1 }}
          />
        </div>
      </section>
    </div>
  );
};

export default Skill;
