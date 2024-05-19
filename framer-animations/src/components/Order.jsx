import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 8,
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      setShowModal(true);
    }, 3000);
  }, [setShowModal]);

  return (
    <motion.div
      // initial={{ x: "100vw" }}
      // animate={{ x: "0" }}
      // transition={{ delay: 0.3 }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <AnimatePresence>
        {visible && (
          <motion.h2 exit={{ y: -900 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
