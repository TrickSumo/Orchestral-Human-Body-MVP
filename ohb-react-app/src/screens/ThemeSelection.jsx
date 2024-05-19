import "./ThemeSelection.css";
import tick from "../assets/img/tick.svg";
import lock from "../assets/img/lock.svg";
import cross from "../assets/img/cross.svg";
import themes from "../utils/Constants";
import { motion } from "framer-motion";
import { useState } from "react";

const themeSelectionVariants = {
  bottomToUp: {
    y: ["100vh", 0],
    opacity: [0, 1],
    transition: {
      type: "spring",
      stiffness: 30,
      duration: 0.3, // Increased duration for a more relaxing effect
      ease: "easeInOut",
      mass: 0.9,
    },
  },
  fadeIn: {
    opacity: [0, 1],
    transition: {
      duration: 0.1, // Increased duration for a smoother effect
      ease: [0.42, 0, 0.58, 1], // Custom easing function for a relaxing effect
    },
  },
  exitAnimation1: {
    opacity: 0,
    y: "100vh",
    transition: {
      stiffness: 20, // Lower stiffness for a more gentle animation
      duration: 0.9, // Increased duration for a more relaxing effect
      ease: "easeInOut", // Smooth easing for a relaxing effect
      mass: 0.9,
    },
  },
  exitAnimation2: {
    opacity: 0,
    transition: {
      duration: 0.1, // Increased duration for a more relaxing effect
      ease: "easeInOut",
    },
  },
};

const ThemeSelection = ({
  setView,
  view,
  selectedTheme,
  setSelectedTheme,
  setLearnMoreTheme,
}) => {
  const [exitAnimation, setExitAnimation] = useState("exitAnimation1");

  console.log("rendered ThemeSelection", view);

  const handleSelection = (theme, isLocked) => {
    if (!isLocked) {
      setSelectedTheme(theme);
      setTimeout(() => {
        handleExit("exitAnimation1", "home");
      }, 300);
    }
  };

  const handleExit = (animation, newView) => {
    setExitAnimation(animation);
    setTimeout(() => {
      setView((prev) => ({
        current: newView,
        previous: prev.current,
      }));
    }, 300); // Match this duration with the exit transition duration
  };

  return (
    <>
      <motion.div
        variants={themeSelectionVariants}
        initial={{ opacity: 0 }}
        animate={view.previous === "themeDescription" ? "fadeIn" : "bottomToUp"}
        exit={themeSelectionVariants[exitAnimation]}
        className="main-container"
      >
        <div>
          <h1 className="title">
            Soundscapes
            <img
              className="cross-img"
              src={cross}
              onClick={() => handleExit("exitAnimation1", "home")}
            />
          </h1>
        </div>

        {Object.keys(themes).map((theme, index) => (
          <div
            className="theme-container"
            key={index}
            onClick={() => handleSelection(theme, themes[theme].isLocked)}
          >
            <div className={`theme-card theme-card-${theme}`}>
              <div className="theme-card-details">
                <div className="theme-card-text">
                  <h2 className="label">{themes[theme].label}</h2>
                  <button
                    className="learn-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                      setLearnMoreTheme(theme);
                      handleExit("exitAnimation2", "themeDescription");
                    }}
                  >
                    Learn more
                  </button>
                </div>

                <div className="theme-card-icon">
                  {theme === selectedTheme ? (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 1.5 } }}
                      className="tick-img"
                      src={tick}
                    />
                  ) : (
                    themes[theme].isLocked && (
                      <img className="lock-img" src={lock} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default ThemeSelection;
