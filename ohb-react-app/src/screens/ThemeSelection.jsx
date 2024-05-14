import "./ThemeSelection.css";
import tick from "../assets/img/tick.svg";
import lock from "../assets/img/lock.svg";
import cross from "../assets/img/cross.svg";
import { useState } from "react";
import themes from "../utils/Constants";
import { motion } from "framer-motion";

const ThemeSelection = ({
  setView,
  selectedTheme,
  setSelectedTheme,
  setLearnMoreTheme,
}) => {
  const [clickedIndex, setClickedIndex] = useState();
  const handleSelection = (theme, isLocked) => {
    console.log(theme, isLocked);
    if (!isLocked) {
      setSelectedTheme(theme);
      // setView("home");
    }
  };
  // const themes = {
  //   heavenlyEssense: {
  //     label: "Heavenly Essense",
  //     description:
  //       "Heavenly Essense lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   greeExpedition: {
  //     label: "Green Expedition",
  //     description:
  //       "Green Expedition lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   magicWoodland: {
  //     label: "Magic Woodland",
  //     description:
  //       "Magic Woodland lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   coreHarmony: {
  //     label: "Core Harmony",
  //     description:
  //       "Core Harmony lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   findYourBliss: {
  //     label: "Find Your Bliss",
  //     description:
  //       "Find Your Bliss lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   aprilShowers: {
  //     label: "April Showers",
  //     description:
  //       "April Showers lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   joyfulMoments: {
  //     label: "Joyful Moments",
  //     description:
  //       "Joyful Moments lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  // };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 30,
          duration: 0.3,
          ease: "easeInOut",
          mass: 0.9,
        }}
        exit={{
          opacity: 0,
          y: "100vh",
          transition: {
            stiffness: 30,
            duration: 0.3,
            ease: "easeInOut",
            mass: 0.9,
          },
        }}
        className="main-container"
      >
        <div>
          <h1 className="title">
            Soundscapes
            <img
              className="cross-img"
              src={cross}
              onClick={() => setView("home")}
            />
          </h1>
        </div>

        {Object.keys(themes).map((theme, index) => (
          <div
            className="theme-container"
            key={index}
            onClick={() => {
              console.log("clicked");
              handleSelection(theme, themes[theme].isLocked);
            }}
          >
            <div className={`theme-card-${theme} `}>
              <div>
                <h2 className="label">{themes[theme].label}</h2>
                {theme === selectedTheme ? (
                  <img className="tick-img" src={tick} />
                ) : (
                  themes[theme].isLocked && (
                    <img className="lock-img" src={lock} />
                  )
                )}
              </div>
              <button
                className="learn-more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setView("themeDescription");
                  setLearnMoreTheme(theme);
                }}
              >
                <p className="para-text">Learn more</p>
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default ThemeSelection;
