import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 },
  },
};

const nextVatiants = {
  hidden: {
    x: "-3000vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      // initial={{ x: "100vw" }}
      // animate={{ x: "0" }}
      // transition={{ delay: 0.3 }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{
        y: "-100vw",
        transition: { ease: "easeInOut" },
      }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: "0", color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 900 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          // initial={{ x: "-3000vw" }}
          // animate={{ x: 0 }}
          // transition={{ type: "spring", stiffness: 300 }}

          variants={nextVatiants}
          // initial="hidden"
          // animate="visible"
          className="next"
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.5,

                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                padding: "1rem 3rem",
                backgroundColor: "#ff299",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
