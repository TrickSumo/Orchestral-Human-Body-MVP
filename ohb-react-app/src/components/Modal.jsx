import React, { useEffect, useState } from "react";
import "./Modal.css"; // This is where the CSS for the modal is imported.
import CrossIcon from "../assets/svg/CrossIcon.svg";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal, children }) => {
  const handleCloseModal = (event) => {
    console.log(event.target.className);
    if (event.target.className === "modal-overlay") {
      setShowModal(false);
    }
  };

  console.log("modal rendered");
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className={`modal-overlay`}
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            exit={{
              opacity: 0,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            className="modal"
          >
            <div
              className="close-button"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <img src={CrossIcon} />
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
