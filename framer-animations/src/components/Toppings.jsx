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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      // initial={{ x: "100vw" }}
      // animate={{ x: "0" }}
      // transition={{ delay: 0.3 }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="toppings container"
      exit={{
        x: "-100vw",
        transition: { ease: "easeInOut" },
      }}
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: "0", color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 900 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.5,

            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            padding: "1rem 3rem",
            backgroundColor: "#ff299",
          }}
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
