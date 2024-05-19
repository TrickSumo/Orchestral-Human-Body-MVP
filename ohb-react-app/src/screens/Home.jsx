import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Modal from "../components/Modal";

import ThreeVerticalDots from "../assets/svg/ThreeVerticalDots.svg";
import PlayIcon from "../assets/svg/PlayIcon.svg";
import PauseIcon from "../assets/svg/PauseIcon.svg";
import RunningIcon from "../assets/svg/RunningIcon.svg";
import MeditationIcon from "../assets/svg/MeditationIcon.svg";
import PlayingGamesIcon from "../assets/svg/PlayingGamesIcon.svg";
import WorkingIcon from "../assets/svg/WorkingIcon.svg";
import { motion } from "framer-motion";
import themes from "../utils/Constants";

const icons = {
  RunningIcon,
  MeditationIcon,
  PlayingGamesIcon,
  WorkingIcon,
};

const Home = ({ setView, selectedTheme, selectedEvent, setSelectedEvent }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const isDevMode = window.origin.includes("localhost");
  const audioRef = useRef(null);

  const handleAudioPlayback = () => {
    if (themes?.[selectedTheme]?.["isSCEnabled"]) {
      if (isAudioPlaying) {
        // pause audio
        console.log("Pausing Audio");
        cmdPeriod();
        setIsAudioPlaying(false);
      } else {
        // play audio
        console.log("Playing Audio");
        sendOSC_t("/s_new", "siii", "air", 1000, 1, 0);
        setIsAudioPlaying(true);
      }
    } else {
      if (isAudioPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsAudioPlaying(false);
      } else {
        audioRef.current = new Audio(
          !isDevMode ? selectedEvent?.["url"] : selectedEvent?.["urlDev"]
        );
        audioRef.current.play();
        setIsAudioPlaying(true);
      }
    }
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    cmdPeriod();
    setIsAudioPlaying(false);
  };

  const handleEventSeletion = (event) => {
    setSelectedEvent(event);
    setModalOpen(false);
  };

  useEffect(() => {
    // Create and set the audio elements to the refs
    if (!themes?.[selectedTheme]?.["isSCEnabled"]) {
      audioRef.current = new Audio(
        !isDevMode ? selectedEvent?.["url"] : selectedEvent?.["urlDev"]
      );
      // "https://d77rulk12plz0.cloudfront.net/ohb_running.mp3"
      // "http://localhost:3003/sound/c.mp3"
    } else {
      audioRef.current = new Audio("");
    }

    // Define the function to handle the end of the audio
    const handleAudioEnd = () => {
      console.log(`finished playing`);
      setIsAudioPlaying(false);
    };

    // Attach 'ended' event listeners to the audio elements
    audioRef.current.addEventListener("ended", () => handleAudioEnd());

    // Cleanup function to remove the event listeners
    return () => {
      audioRef.current.removeEventListener("ended", () => handleAudioEnd());
    };
  }, []);

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
        // style={{ height: `${height}px` }}
      >
        {!isModalOpen && (
          <div className="currentEvent">
            <span className="currentEventName">
              <span className="currentEventIcon">
                <img
                  src={icons[selectedEvent.iconName]}
                  alt={selectedEvent.name}
                />
              </span>
              {selectedEvent.name}
            </span>
            <p className="currentEventTime">{selectedEvent.time}</p>
          </div>
        )}
        <div className="controls">
          <img
            className="control-img"
            src={ThreeVerticalDots}
            onClick={() => {
              console.log("Openinig Settings Modal");
              stopAudio();
              setModalOpen(true);
            }}
            width={"27vh"}
          />
          <img
            className="play-img"
            src={!isAudioPlaying ? PlayIcon : PauseIcon}
            width={"33vh"}
            onClick={handleAudioPlayback}
          />{" "}
        </div>
        <button className={`hero-btn bg-hero-btn-${selectedTheme}`}>
          <p
            className="hero-btn-content"
            onClick={() => {
              stopAudio();
              setView((prev) => ({
                current: "themeSelection",
                previous: prev.current,
              }));
            }}
          >
            {themes[selectedTheme].label}
          </p>
        </button>
      </motion.div>

      <Modal showModal={isModalOpen} setShowModal={setModalOpen}>
        <div className="eventSelection">
          <p className="eventSelectionHeader">SELECT AN EVENT</p>
          {/* <div className="events"> */}
          {console.log(
            themes,
            selectedTheme,
            themes?.[selectedTheme],
            themes?.[selectedTheme]?.["events"]
          )}
          {(themes?.[selectedTheme]?.["events"] || [])?.map((event) => (
            <div
              className="eventItem"
              key={event.name}
              onClick={() => {
                handleEventSeletion(event);
              }}
            >
              <img src={icons[event.iconName]} alt={event.name} />
              <div className="eventItemDescription">
                <p className="eventName">{event.name}</p>
                <p className="eventTime">{event.time}</p>
              </div>
            </div>
          ))}
          {selectedTheme === "heavenlyEssense" && (
            <div className="margin-div"></div>
          )}
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
