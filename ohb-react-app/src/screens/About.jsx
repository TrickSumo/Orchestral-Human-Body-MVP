import React from "react";
import { motion as m } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="about-container">About</div>
    </m.div>
  );
};

export default About;
