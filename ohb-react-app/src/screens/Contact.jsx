import React from "react";
import "./Contact.css";
import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="contact-container">Contact</div>
    </m.div>
  );
};

export default Contact;
