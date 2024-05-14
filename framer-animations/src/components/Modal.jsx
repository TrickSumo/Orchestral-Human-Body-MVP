import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
          >
            <h2>Want to make another pizza?</h2>
            <Link to="/">
              <button
              // onClick={() => {
              //   setShowModal(false);
              // }}
              >
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
