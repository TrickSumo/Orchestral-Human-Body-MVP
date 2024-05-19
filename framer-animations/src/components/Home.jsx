import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

// Keyframes
const buttonVariants = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition: {
      delay: 0.9,
    },
  },
  // hover: {
  //   scale: [1.1, 1, 1.1, 1, 1.1, 1],
  //   textShadow: "0px 0px 8px rgb(255, 255, 255)",
  //   boxShadow: "0px 0px 8px rgb(255, 255, 255)",
  // },

  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      yoyo: 10,
      // duration: 0.3,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      // animate={{ rotateZ: 180, opacity: 0.3, marginTop: 200 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      exit={{
        x: "-100vw",
        transition: { ease: "easeInOut" },
      }}
    >
      {/* <h2> */}
      <motion.h2 animate={{ fontSize: 50, color: "#ff299", x: -100, y: -100 }}>
        Welcome to Pizza Joint
      </motion.h2>

      {/* </h2> */}
      <Link to="/base">
        <motion.button
          // whileHover={{
          //   scale: 1.5,

          //   boxShadow: "0px 0px 8px rgb(255, 255, 255)",
          //   padding: "1rem 3rem",
          //   backgroundColor: "#ff299",
          // }}
          variants={buttonVariants}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
