import React, { useState } from "react";
import "./Home.css";
import Modal from "../components/Modal";

import ThreeVerticalDots from "../assets/svg/ThreeVerticalDots.svg";
import PlayIcon from "../assets/svg/PlayIcon.svg";
import RunningIcon from "../assets/svg/RunningIcon.svg";
import MeditationIcon from "../assets/svg/MeditationIcon.svg";
import PlayingGamesIcon from "../assets/svg/PlayingGamesIcon.svg";
import { motion } from "framer-motion";

const icons = {
  RunningIcon,
  MeditationIcon,
  PlayingGamesIcon,
};

const events = [
  {
    name: "Running - 7 miles",
    iconName: "RunningIcon",
    time: "5/17/2024 9:11 AM - 5/17/2024 9:48 AM",
  },
  {
    name: "Meditation at home",
    iconName: "MeditationIcon",
    time: "5/09/2024 21:14 AM - 5/09/2024 22:25 AM",
  },
  {
    name: "Playing with the kids",
    iconName: "PlayingGamesIcon",
    time: "4/30/2024 11:23 AM - 4/30/2024 12:56 AM",
  },
];

const Home = ({ setView }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className="hero-container"
      >
        <div className="controls">
          <img
            className="control-img"
            src={ThreeVerticalDots}
            onClick={() => {
              console.log("Openinig Settings Modal");
              setModalOpen(true);
            }}
          />
          <img className="play-img" src={PlayIcon} />{" "}
        </div>
        <button className="hero-btn">
          <p
            className="hero-btn-content"
            onClick={() => {
              setView("themeSelection");
            }}
          >
            Heavenly Essence
          </p>
        </button>
      </motion.div>

      <Modal showModal={isModalOpen} setShowModal={setModalOpen}>
        <div className="eventSelection">
          <p className="eventSelectionHeader">SELECT AN EVENT</p>
          {/* <div className="events"> */}
          {events.map((event) => (
            <div
              className="eventItem"
              key={event.name}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              <img src={icons[event.iconName]} alt={event.name} />
              <div className="eventItemDescription">
                <p className="eventName">{event.name}</p>
                <p className="eventTime">{event.time}</p>
              </div>
            </div>
          ))}
          {/* </div> */}

          <div className="horizontalLine"></div>
          <div className="uploadFile">UPLOAD FILE</div>
          {/* <p>SELECT AN EVENT </p>
          <p>SELECT AN EVENT </p>
          <p>SELECT AN EVENT </p> */}
        </div>
      </Modal>
    </>
  );
};

export default Home;
