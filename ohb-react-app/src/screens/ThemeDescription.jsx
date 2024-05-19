import React, { useEffect, useState } from "react";
import "./ThemeDescription.css";
import themes from "../utils/Constants";
import goback from "../assets/img/goback.svg";
import { motion } from "framer-motion";
import useWindowHeight from "../utils/useWindowHeight";

const ThemeDescription = ({ setView, learnMoreTheme }) => {
  const { id, label, titleContent, tag, listenWithPara } =
    themes[learnMoreTheme];
  // const [count, setCount] = useState(0);
  // console.log("desc rendered");

  // const height = useWindowHeight();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 999);
  // }, []);

  const themeDescriptionVariants = {
    leftToRight: {
      x: ["100vw", 0],
      opacity: [0, 1],
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 0.3,
        ease: "easeInOut",
        mass: 0.9,
      },
    },
  };

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
      // variants={themeDescriptionVariants}
      // animate="leftToRight"
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
      className={`theme-description-container bg-${learnMoreTheme}`}
      // style={{ height: `${height}px` }}
    >
      <img
        className="goback-img"
        onClick={() =>
          setView((prev) => ({
            current: "themeSelection",
            previous: prev.current,
          }))
        }
        src={goback}
        width={"15px"}
      />

      <h1 className="main-title">{label}</h1>
      <p className="theme-description">{titleContent}</p>
      <div className="best-for-div">
        <h4 className="best-for">BEST FOR</h4>
        {tag.map((btn) => {
          return (
            <button
              key={btn}
              className={`best-for-btn-one btn-${learnMoreTheme}`}
            >
              {btn}
            </button>
          );
        })}
      </div>
      <div className="listen-with">
        <h5 className="listen-with-title">LISTEN WITH</h5>
        <p className="listen-with-para">{listenWithPara}</p>{" "}
      </div>
    </motion.div>
  );
};

export default ThemeDescription;
