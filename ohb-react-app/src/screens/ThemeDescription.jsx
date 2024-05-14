import React from "react";
import "./ThemeDescription.css";
import themes from "../utils/Constants";
import goback from "../assets/img/goback.svg";
import { motion } from "framer-motion";

const ThemeDescription = ({ setView, learnMoreTheme }) => {
  const { id, label, titleContent, tag, listenWithPara } =
    themes[learnMoreTheme];
  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 30,
        duration: 0.3,
        ease: "easeInOut",
        mass: 0.9,
      }}
      exit={{
        opacity: 0,
        x: "100vw",
        transition: {
          stiffness: 30,
          duration: 0.3,
          ease: "easeInOut",
          mass: 0.9,
        },
      }}
      className="Theme-container"
    >
      <div className={`label-container-${id} `}>
        <img
          className="goback-img"
          onClick={() => setView("themeSelection")}
          src={goback}
        />

        <h1 className="main-title">{label}</h1>
        <p className="title-content">{titleContent}</p>
        <div className="best-for-div">
          <h4 className="best-for">BEST FOR</h4>
          {tag.map((btn) => {
            return (
              <button key={btn} className={`best-for-btn-one btn-${id}`}>
                {btn}
              </button>
            );
          })}
        </div>
        <div className="listen-with">
          <h5 className="listen-with-title">LISTEN WITH</h5>
          <p className="listen-with-para">{listenWithPara}</p>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeDescription;
